
import mongoose from 'mongoose';
export class CreateVaccinDto {
    nom: string;
    user: { type: mongoose.Schema.Types.ObjectId,  ref: 'user' };
}