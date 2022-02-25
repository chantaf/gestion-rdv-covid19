import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { EphemeralKeyInfo } from "tls";

import { User, UserDocument } from "../../users/schemas/user.schema";
const Helper = require('../helpers')
const bcrypt = require('bcrypt');


@Injectable()
export class ResponsablesRepository {
    constructor(@InjectModel(User.name) private ResponsableModel: Model<UserDocument>) {}

    async findOne(id: string): Promise<User> {
        return this.ResponsableModel.findOne({ _id: id }).exec();
    }

  
//Login
 async login(email:string ,password:string){
    const Responsable = this.ResponsableModel.findOne({ email: email}).exec();
    Responsable === null && ({Message : 'email Incorrect'})

    bcrypt.compare(password,password).then(async (validPass) => {
        !validPass &&  ({Message : 'Password Incorrect'})
        
        const Role="Responsable"
        const token = await Helper.CreateJwt("1h")
        const Reponse={token,Role}
        return Reponse
    })
    .catch(err => ({Message : err}));
    }


//Logout
async Logout(){
   return({Message : "logout"})
}
}