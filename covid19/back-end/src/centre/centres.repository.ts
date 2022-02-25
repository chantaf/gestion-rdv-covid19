import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Centre, CentreDocument } from "./schemas/centre.schema.y";

@Injectable()
export class CentresRepository {
    constructor(@InjectModel(Centre.name) private CentreModel: Model<CentreDocument>) {}

    async findOne(id: string): Promise<Centre> {
        return this.CentreModel.findOne({ _id: id }).exec();
    }

    async find(): Promise<Centre[]> {
        return this.CentreModel.find().exec();
    }

    async create(Centre: Centre): Promise<Centre> {
        const newCentre = new this.CentreModel(Centre);
        return newCentre.save()
    }

    async findOneAndUpdate(id: string, Centre: Partial<Centre>): Promise<Centre> {
        return this.CentreModel.findOneAndUpdate({_id: id }, Centre, { new: true });
    }

    async delete(id: string) {
        const deleteCentre = await this.CentreModel.findByIdAndRemove({ _id: id }).exec();
        return deleteCentre;
      }
}