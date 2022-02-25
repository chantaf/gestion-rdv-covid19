import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';

import { User } from "../../users/schemas/user.schema";
import { ResponsablesRepository} from "./authresponsables.repository";

@Injectable()
export class ResponsablesService {
    constructor(private readonly ResponsablesRepository: ResponsablesRepository) {}

    async getResponsableById(ResponsableId : string): Promise<User> {
        return this.ResponsablesRepository.findOne(ResponsableId)
    }

   
    //Login
    async login(email : string): Promise<User> {
        return this.ResponsablesRepository.findOne(email)
    }
 

//Logout
async logout(): Promise<User> {
    return  this.logout();
}
}