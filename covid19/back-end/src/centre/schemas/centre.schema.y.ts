import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CentreDocument = Centre & Document;

@Schema()
export class Centre {
    @Prop()
    nom: string;

    @Prop()
    ville: string;

    @Prop()
    quartie: string;

}

export const CentreSchema = SchemaFactory.createForClass(Centre);