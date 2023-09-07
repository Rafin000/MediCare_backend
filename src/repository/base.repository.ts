import { type Prisma } from "@prisma/client";

export default class BaseRepository<DatabaseType> {
  protected db: DatabaseType;
  protected model: Prisma.ModelName

  constructor(db: DatabaseType, model: Prisma.ModelName) {
    this.db = db;
    this.model = model
  }

  public async create<parismaTypeData, formattedTypeData>(data: parismaTypeData, transformer: (data: parismaTypeData) => formattedTypeData): Promise<formattedTypeData> {
    try {
      const newItem = await this.db[this.model].create({ data });
      return transformer(newItem);
    } catch (error) {
      throw error;
    }
  }

  public async update<FormattedDataType, PrismaTableType>(
    id: string,
    data: Partial<PrismaTableType>,
    transformer: (data: any) => FormattedDataType
  ): Promise<FormattedDataType> {
    try {
      const updatedItem = await this.db[this.model].update({
        where: {
          id,
        },
        data,
      });
      return transformer(updatedItem);
    } catch (error) {
      throw error;
    }
  }

  public async get<FormattedDataType, PrismaTableType>(
    id: string,
    transform: (data: PrismaTableType) => FormattedDataType
  ): Promise<FormattedDataType> {
    try {
      const data: PrismaTableType = await this.db[this.model].findUnique({
        where: {
          id: id,
        },
      })
      return transform(data);
    } catch (error) {
      throw error
    }
  }


  public async getAll<FormattedDataType, PrismaTableType>(
    transformCollection: (data: PrismaTableType[]) => FormattedDataType[]
  ): Promise<FormattedDataType[]> {
    try {
      const allRawUsers = await this.db[this.model].findMany();
      return transformCollection(allRawUsers);
    } catch (error) {
      throw error
    }
  }



  public async findUniqueByKey<PrismaTableType>(key: string, value: any): Promise<PrismaTableType> {
    try {
      const data = await this.db[this.model].findUnique({
        where: {
          [key]: value
        },
      })

      return data
    } catch (err) {
      throw err;
    }
  }


  public async findUniqueBySpecificKey<PrismaTableType>(specificKey: string, value: any): Promise<PrismaTableType> {
    try {
      const data = await this.db[this.model].findUnique({
        where: {
          [specificKey]: value
        },
      })

      return data
    } catch (err) {
      throw err;
    }
  }


  public async delete<T>(id: string, transformer: (data: any) => T): Promise<T> {
    try {
      const deletedUser = await this.db[this.model].delete({
        where: {
          id,
        },
      });
      return transformer(deletedUser);
    } catch (error) {
      throw error;
    }
  }
}
