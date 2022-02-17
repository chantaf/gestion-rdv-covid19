import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Contact, ContactDocument } from "./schemas/contact.schema.y";

@Injectable()
export class ContactsRepository {
    constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>) {}

    async findOne(id: string): Promise<Contact> {
        return this.contactModel.findOne({ _id: id }).exec();
    }

    async find(): Promise<Contact[]> {
        return this.contactModel.find().exec();
    }

    async create(contact: Contact): Promise<Contact> {
        const newContact = new this.contactModel(contact);
        return newContact.save()
    }

    async findOneAndUpdate(id: string, contact: Partial<Contact>): Promise<Contact> {
        return this.contactModel.findOneAndUpdate({_id: id }, contact, { new: true });
    }

    async delete(id: string) {
        const deleteContact = await this.contactModel.findByIdAndRemove({ _id: id }).exec();
        return deleteContact;
      }
}