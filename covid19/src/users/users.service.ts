import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from "./dto/update-user.dto";

import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async getUserById(userId : string): Promise<User> {
        return this.usersRepository.findOne(userId)
    }
 

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async createUser(nom: string,prenom: string,email: string, password: string,tel:string,role:string): Promise<User> {
        return this.usersRepository.create({
            nom,
            prenom,
            email,
            password,
            tel,
            role
        })
    }

    async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate(userId, userUpdates);
    }

    async deleteUser(userId : string): Promise<User> {
        return this.usersRepository.delete(userId)
    }
 
}