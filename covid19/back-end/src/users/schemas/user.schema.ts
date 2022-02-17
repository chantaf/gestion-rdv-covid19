import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    nom: string;

    @Prop()
    prenom: string;

    @Prop()
    email: string;

    @Prop()
    password: string

    @Prop()
    tel: string;

    @Prop()
    role: string
}

export const UserSchema = SchemaFactory.createForClass(User);