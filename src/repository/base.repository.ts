import {  type Prisma } from "@prisma/client";

export default class BaseRepository<DatabaseType> {
  protected db:  DatabaseType;
  protected model: Prisma.ModelName

  constructor(db: DatabaseType, model:Prisma.ModelName ){
    this.db = db;
    this.model = model
  }

  protected async create<T>(data: Partial<T>, transformer: (data: any) => T): Promise<T> {
    try {
      const newItem = await this.db[this.model].create({ data });
      return transformer(newItem);
    } catch (error) {
      throw error;
    }
  }

  protected async update<FormattedDataType,PrismaTableType>(
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

  // get with pagination


  // get all without pagination


  // find my primary key

  // find by a specific key 


  // find unique 

  public async findUniqueByKey<PrismaDTableType>(key: string,value:any): Promise<PrismaDTableType> {
    try {
      const data =  await this.db[this.model].findUnique({
        where: {
          [key]: value
        },
      })

      return data
    } catch (err) {
      throw err;
    }
  }

  protected async delete<T>(id: string, transformer: (data: any) => T): Promise<T> {
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
