import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';

import { Centre } from "./schemas/centre.schema.y";
import { CentresRepository} from "./centres.repository";

@Injectable()
export class CentresService {
    constructor(private readonly CentresRepository: CentresRepository) {}

    async getCentreById(CentreId : string): Promise<Centre> {
        return this.CentresRepository.findOne(CentreId)
    }
 

    async getCentres(): Promise<Centre[]> {
        return this.CentresRepository.find();
    }

    async createCentre(nom: string,ville: string,quartie:string): Promise<Centre> {
        return this.CentresRepository.create({
           nom,
            ville,
            quartie,
        })
    }

    

    async deleteCentre(CentreId : string): Promise<Centre> {
        return this.CentresRepository.delete(CentreId)
    }
 
}