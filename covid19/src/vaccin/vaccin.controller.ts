import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateVaccinDto } from './dto/create-vaccin.dto';
import { UpdateVaccinDto } from './dto/update-vaccin.dto';

import { Vaccin} from './schemas/vaccin.schema';
import { VaccinsService } from './vaccin.service';

@Controller('vaccins')
export class VaccinsController {
  constructor(private readonly vaccinsService:   VaccinsService) {}

  @Get(':vaccinId')
  async getVaccin(@Param('vaccinId') vaccinId: string): Promise<Vaccin> {
    return this.vaccinsService.getVaccinById(vaccinId);
  }

  @Get()
  async getVaccins(): Promise<Vaccin[]> {
      return this.vaccinsService.getVaccins();
  }

  @Post()
  async createVaccin(@Body() CreateVaccinDto: CreateVaccinDto): Promise<Vaccin> {
      return this.vaccinsService.createVaccin(CreateVaccinDto.nom, CreateVaccinDto.user)
  }

  @Patch(':vaccinId')
  async updateVaccin(@Param('vaccinId') vaccinId: string, @Body() UpdateVaccinDto: UpdateVaccinDto): Promise<Vaccin> {
      return this.vaccinsService.updateVaccin(vaccinId, UpdateVaccinDto);
  }

  @Delete(':vaccinId')
  async deleteVaccin(@Param('vaccinId') vaccinId: string): Promise<Vaccin> {
    return this.vaccinsService.deleteVaccin(vaccinId);
  }
}
