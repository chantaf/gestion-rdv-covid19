import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../../users/schemas/user.schema";
import { ResponsablesController } from "./authresponsables.controller";
import { ResponsablesRepository } from "./authresponsables.repository";
import { ResponsablesService } from "./authresponsables.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [ResponsablesController],
    providers: [ResponsablesService, ResponsablesRepository]
})
export class ResponsablesModule {}