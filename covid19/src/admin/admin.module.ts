import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Admin , AdminSchema } from "../admin/schemas/admin.schema";
import { AdminsController } from "./admin.controller";
import {AdminsRepository } from "./admin.repository";
import { AdminsService } from "./admin.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }])],
    controllers: [AdminsController],
    providers: [AdminsService, AdminsRepository]
})
export class AdminsModule {}