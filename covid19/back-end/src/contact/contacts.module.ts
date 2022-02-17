import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Contact, ContactSchema } from "./schemas/contact.schema.y";
import { ContactsController } from "./contact.controller";
import { ContactsRepository } from "./contacts.repository";
import { ContactsService } from "./contacts.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }])],
    controllers: [ContactsController],
    providers: [ContactsService, ContactsRepository]
})
export class ContactsModule {}