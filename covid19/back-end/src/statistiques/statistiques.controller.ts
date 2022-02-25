import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Vaccin } from '../vaccin/schemas/vaccin.schema';
import { VaccinsService } from './statistiques.service';

@Controller('Vaccin')
export class VaccinsController {
  constructor(private readonly VaccinsService: VaccinsService) {}

  @Get(':VaccinId')
  async getVaccin(@Param('VaccinId') VaccinId: string): Promise<Vaccin> {
    return this.VaccinsService.getVaccinById(VaccinId);
  }

  @Get()
  async getVaccins(): Promise<Vaccin[]> {
      return this.VaccinsService.getVaccins();
  }


}
