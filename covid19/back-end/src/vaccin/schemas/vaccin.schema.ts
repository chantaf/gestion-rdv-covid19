import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

export type VaccinDocument = Vaccin & Document;

@Schema()
export class Vaccin {
    @Prop()
    nom: string;

    @Prop()
    prenom: string;

    @Prop()
    user:  { type: mongoose.Schema.Types.ObjectId,  ref: 'user' };
  
}

export const VaccinSchema = SchemaFactory.createForClass(Vaccin);