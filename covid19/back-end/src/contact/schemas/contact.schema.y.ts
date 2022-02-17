import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
    @Prop()
    sujet: string;

    @Prop()
    discription: string;

    @Prop()
    nom: string;

    @Prop()
    tel: string

    @Prop()
    email: string;

    @Prop()
    reponse: string
}

export const ContactSchema = SchemaFactory.createForClass(Contact);