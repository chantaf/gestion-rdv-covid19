import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findOne(id: string): Promise<User> {
        return this.userModel.findOne({ _id: id }).exec();
    }

    async find(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async create(user: User): Promise<User> {
        const newUser = new this.userModel(user);
        return newUser.save()
    }

    async findOneAndUpdate(id: string, user: Partial<User>): Promise<User> {
        return this.userModel.findOneAndUpdate({_id: id }, user, { new: true });
    }

    async delete(id: string) {
        const deletedUser = await this.userModel.findByIdAndRemove({ _id: id }).exec();
        return deletedUser;
      }
}