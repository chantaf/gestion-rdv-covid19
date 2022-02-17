import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateVaccinDto } from "./dto/update-vaccin.dto";

import { Vaccin } from "./schemas/vaccin.schema";
import { VaccinsRepository } from "./vaccin.repository";
import mongoose from 'mongoose';

@Injectable()
export class VaccinsService {
    constructor(private readonly vaccinsRepository: VaccinsRepository) {}

    async getVaccinById(adminId : string): Promise<Vaccin> {
        return this.vaccinsRepository.findOne(adminId)
    }
 

    async getVaccins(): Promise<Vaccin[]> {
        return this.vaccinsRepository.find();
    }

    async createVaccin(nom: string,user: { type: mongoose.Schema.Types.ObjectId,  ref: 'user' }): Promise<Vaccin> {
        return this.vaccinsRepository.create({
            nom,
            user
        })
    }

    async updateVaccin(vaccinId: string, vaccinUpdates: UpdateVaccinDto): Promise<Vaccin> {
        return this.vaccinsRepository.findOneAndUpdate(vaccinId, vaccinUpdates);
    }

    async deleteVaccin(vaccinId : string): Promise<Vaccin> {
        return this.vaccinsRepository.delete(vaccinId)
    }
 
}