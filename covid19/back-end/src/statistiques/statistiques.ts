import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Vaccin, VaccinSchema } from "../vaccin/schemas/vaccin.schema";
import { VaccinsController } from "./statistiques.controller";
import { VaccinsRepository } from "./statistiques.repository";
import { VaccinsService } from "./statistiques.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Vaccin.name, schema: VaccinSchema }])],
    controllers: [VaccinsController],
    providers: [VaccinsService, VaccinsRepository]
})
export class VaccinsModule {}