import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateContactDto} from './dto/create-contact.dto'

import { Contact } from './schemas/contact.schema.y';
import { ContactsService } from './contacts.service';

@Controller('contact')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get(':contactId')
  async getContact(@Param('contactId') contactId: string): Promise<Contact> {
    return this.contactsService.getContactById(contactId);
  }

  @Get()
  async getContacts(): Promise<Contact[]> {
      return this.contactsService.getContacts();
  }

  @Post()
  async createContact(@Body() createContactDto: CreateContactDto): Promise<Contact> {
      return this.contactsService.createContact(createContactDto.sujet,createContactDto.discription,createContactDto.nom,createContactDto.tel,createContactDto.email,createContactDto.reponse)
  }

 
  @Delete(':contactId')
  async deleteContact(@Param('contactId') contactId: string): Promise<Contact> {
    return this.contactsService.deleteContact(contactId);
  }
}
