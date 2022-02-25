import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Vaccin, VaccinDocument } from "../vaccin/schemas/vaccin.schema";

@Injectable()
export class VaccinsRepository {
    constructor(@InjectModel(Vaccin.name) private VaccinModel: Model<VaccinDocument>) {}

    async findOne(id: string): Promise<Vaccin> {
        return this.VaccinModel.findOne({ _id: id }).exec();
    }

    async find(): Promise<Vaccin[]> {
        return this.VaccinModel.find().exec();
    }

   
}