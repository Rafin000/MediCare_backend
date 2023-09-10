import { Treatment } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import treatmentCollection from "../transformer/treatment.transformer/treatment.collection";
import treatmentResource from "../transformer/treatment.transformer/treatment.resource";
import { ITreatment, ITreatmentCreateDto } from "../types";
import TreatmentRepository from "../repository/treatment.repository";

export default class TreatmentService {
  protected treatmentRepository: TreatmentRepository;

  constructor() {
    this.treatmentRepository = new TreatmentRepository();
  }

  public async getAllTreatments(): Promise<ITreatment[]> {
    try {
      const allTreatments = await this.treatmentRepository.getAllTreatments();
      return allTreatments;
    } catch (error) {
      throw error;
    }
  }

  public async getTreatment(treatmentId: string): Promise<ITreatment> {
    try {
      const treatment = await this.treatmentRepository.getTreatment(treatmentId);
      return treatment
    } catch (error) {
      throw error
    }
  }

  public async createTreatment(data: ITreatmentCreateDto): Promise<ITreatment> {
    try {
      const newTreatment = await this.treatmentRepository.createTreatment(data);
      return newTreatment;
    } catch (error) {
      throw error;
    }
  }

  public async deleteTreatment(treatmentId: string): Promise<ITreatment> {
    try {
      const deletedTreatment = await this.treatmentRepository.deleteTreatment(treatmentId);
      return deletedTreatment;
    } catch (error) {
      throw error;
    }
  }

  public async updateTreatment(treatmentId: string, payload: Partial<ITreatment>): Promise<ITreatment> {
    try {
      const updatedTreatment = await this.treatmentRepository.updateTreatment(treatmentId, payload);
      return updatedTreatment;
    } catch (error) {
      throw error;
    }
  }
}
