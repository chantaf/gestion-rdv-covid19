import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Vaccin , VaccinSchema } from "../vaccin/schemas/vaccin.schema";
import { VaccinsController } from "./vaccin.controller";
import {VaccinsRepository } from "./vaccin.repository";
import { VaccinsService } from "./vaccin.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Vaccin.name, schema: VaccinSchema }])],
    controllers: [VaccinsController],
    providers: [VaccinsService, VaccinsRepository]
})
export class VaccinsModule {}