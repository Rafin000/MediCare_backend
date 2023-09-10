import { Doctor } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";

export default class DoctorRepository extends BaseRepository<DbType> {
  constructor() {
    super(db, 'Doctor');
  }


  public async getDoctorInfos(doctorId: string) {
    try {
      const doctorInfos = await db.doctor_Info.findMany({
        where: {
          doctor_id: doctorId
        }
      });
      return doctorInfos;
    } catch (error) {
      throw error;
    }
  }
}
