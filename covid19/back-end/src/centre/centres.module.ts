import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Centre, CentreSchema } from "./schemas/centre.schema.y";
import { CentresController } from "./centres.controller";
import { CentresRepository } from "./centres.repository";
import { CentresService } from "./centres.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Centre.name, schema: CentreSchema }])],
    controllers: [CentresController],
    providers: [CentresService, CentresRepository]
})
export class CentresModule {}