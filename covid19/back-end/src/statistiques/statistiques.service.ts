import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';

import { Vaccin } from "../vaccin/schemas/vaccin.schema";
import { VaccinsRepository} from "./statistiques.repository";

@Injectable()
export class VaccinsService {
    constructor(private readonly VaccinsRepository: VaccinsRepository) {}

    async getVaccinById(VaccinId : string): Promise<Vaccin> {
        return this.VaccinsRepository.findOne(VaccinId)
    }
 

    async getVaccins(): Promise<Vaccin[]> {
        return this.VaccinsRepository.find();
    }

   
 
}