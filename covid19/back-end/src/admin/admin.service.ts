import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateAdminDto } from "./dto/update-admin.dto";

import { Admin } from "./schemas/admin.schema";
import { AdminsRepository } from "./admin.repository";

@Injectable()
export class AdminsService {
    constructor(private readonly adminsRepository: AdminsRepository) {}

    async getAdminById(adminId : string): Promise<Admin> {
        return this.adminsRepository.findOne(adminId)
    }
 

    async getAdmins(): Promise<Admin[]> {
        return this.adminsRepository.find();
    }

    async createAdmin(nom: string,prenom: string,email: string, password: string): Promise<Admin> {
        return this.adminsRepository.create({
            nom,
            prenom,
            email,
            password,
        })
    }

    async updateAdmin(adminId: string, adminUpdates: UpdateAdminDto): Promise<Admin> {
        return this.adminsRepository.findOneAndUpdate(adminId, adminUpdates);
    }

    async deleteAdmin(adminId : string): Promise<Admin> {
        return this.adminsRepository.delete(adminId)
    }
 
}