import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Admin, AdminDocument } from "./schemas/admin.schema";

@Injectable()
export class AdminsRepository {
    constructor(@InjectModel(Admin.name) private adminModel: Model<AdminDocument>) {}

    async findOne(id: string): Promise<Admin> {
        return this.adminModel.findOne({ _id: id }).exec();
    }

    async find(): Promise<Admin[]> {
        return this.adminModel.find().exec();
    }

    async create(admin: Admin): Promise<Admin> {
        const newAdmin = new this.adminModel(admin);
        return newAdmin.save()
    }

    async findOneAndUpdate(id: string, admin: Partial<Admin>): Promise<Admin> {
        return this.adminModel.findOneAndUpdate({_id: id }, admin, { new: true });
    }

    async delete(id: string) {
        const deletedAdmin = await this.adminModel.findByIdAndRemove({ _id: id }).exec();
        return deletedAdmin;
      }
}