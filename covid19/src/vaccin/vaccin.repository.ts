import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Vaccin, VaccinDocument } from "./schemas/vaccin.schema";

@Injectable()
export class VaccinsRepository {
    constructor(@InjectModel(Vaccin.name) private vaccinModel: Model<VaccinDocument>) {}

    async findOne(id: string): Promise<Vaccin> {
        return this.vaccinModel.findOne({ _id: id }).exec();
    }

    async find(): Promise<Vaccin[]> {
        return this.vaccinModel.find().exec();
    }

    async create(vaccin: Vaccin): Promise<Vaccin> {
        const newVaccin = new this.vaccinModel(vaccin);
        return newVaccin.save()
    }

    async findOneAndUpdate(id: string, vaccin: Partial<Vaccin>): Promise<Vaccin> {
        return this.vaccinModel.findOneAndUpdate({_id: id }, vaccin, { new: true });
    }

    async delete(id: string) {
        const deletedVaccin = await this.vaccinModel.findByIdAndRemove({ _id: id }).exec();
        return deletedVaccin;
      }
}