import mongoose from 'mongoose';
export class UpdateVaccinDto {
    nom: string;
    user: { type: mongoose.Schema.Types.ObjectId,  ref: 'user' };
}