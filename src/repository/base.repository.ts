// import { PrismaClient, ModelName } from '@prisma/client';
// class BaseRepository<T> {
//   protected prisma: PrismaClient;
//   protected model: ModelName; // Store the model name
//   constructor(model: ModelName) {
//     this.prisma = new PrismaClient();
//     this.model = model;
//   }
//   async create(data: Partial<T>): Promise<T> {
//     return this.prisma[this.model].create({ data });
//   }
//   async findById(id: number): Promise<T | null> {
//     return this.prisma[this.model].findFirst({ where: { id } });
//   }
//   async update(id: number, data: Partial<T>): Promise<T | null> {
//     return this.prisma[this.model].update({ where: { id }, data });
//   }
//   async delete(id: number): Promise<T | null> {
//     return this.prisma[this.model].delete({ where: { id } });
//   }
//   async findMany(): Promise<T[]> {
//     return this.prisma[this.model].findMany();
//   }
// }


import { PrismaClient } from "@prisma/client";

export default class BaseRepository {
  protected db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  protected async create<T>(model: string, data: Partial<T>, transformer: (data: any) => T): Promise<T> {
    try {
      const newItem = await this.db[model].create({ data });
      return transformer(newItem);
    } catch (error) {
      throw error;
    }
  }

  protected async update<T>(
    model: string,
    id: string,
    data: Partial<T>,
    transformer: (data: any) => T
  ): Promise<T> {
    try {
      const updatedItem = await this.db[model].update({
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

  protected async delete<T>(model: string, id: string, transformer: (data: any) => T): Promise<T> {
    try {
      const deletedUser = await this.db[model].delete({
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
