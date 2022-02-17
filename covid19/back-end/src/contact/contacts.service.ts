import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';

import { Contact } from "./schemas/contact.schema.y";
import { ContactsRepository} from "./contacts.repository";

@Injectable()
export class ContactsService {
    constructor(private readonly contactsRepository: ContactsRepository) {}

    async getContactById(contactId : string): Promise<Contact> {
        return this.contactsRepository.findOne(contactId)
    }
 

    async getContacts(): Promise<Contact[]> {
        return this.contactsRepository.find();
    }

    async createContact(sujet: string,discription: string,nom:string,tel:string,email:string,reponse:string): Promise<Contact> {
        return this.contactsRepository.create({
            sujet,
            discription,
            nom,
            tel,
            email,
            reponse
        })
    }

    

    async deleteContact(contactId : string): Promise<Contact> {
        return this.contactsRepository.delete(contactId)
    }
 
}