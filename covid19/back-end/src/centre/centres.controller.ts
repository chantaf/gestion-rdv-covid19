import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCentreDto} from './dto/create-centre.dto'

import { Centre } from './schemas/centre.schema.y';
import { CentresService } from './Centres.service';

@Controller('Centre')
export class CentresController {
  constructor(private readonly CentresService: CentresService) {}

  @Get(':CentreId')
  async getCentre(@Param('CentreId') CentreId: string): Promise<Centre> {
    return this.CentresService.getCentreById(CentreId);
  }

  @Get()
  async getCentres(): Promise<Centre[]> {
      return this.CentresService.getCentres();
  }

  @Post()
  async createCentre(@Body() createCentreDto: CreateCentreDto): Promise<Centre> {
      return this.CentresService.createCentre(createCentreDto.nom,createCentreDto.ville,createCentreDto.quartie)
  }

 
  @Delete(':CentreId')
  async deleteCentre(@Param('CentreId') CentreId: string): Promise<Centre> {
    return this.CentresService.deleteCentre(CentreId);
  }
}
