import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';


import { User } from '../../users/schemas/user.schema';
import { ResponsablesService } from './authresponsables.service';

@Controller('Responsable')
export class ResponsablesController {
  constructor(private readonly ResponsablesService: ResponsablesService) {}

  @Get(':ResponsableId')
  async getResponsable(@Param('ResponsableId') ResponsableId: string): Promise<User> {
    return this.ResponsablesService.getResponsableById(ResponsableId);
  }

  @Get(':email')
  async login(@Param('email') email: string): Promise<User> {
    return this.ResponsablesService.login(email);
  }

  @Get(':email')
  async logout(): Promise<User> {
    return this.ResponsablesService.logout();
  }
  

}
