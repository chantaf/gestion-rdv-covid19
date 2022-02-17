import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

import { Admin} from './schemas/admin.schema';
import { AdminsService } from './admin.service';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService:   AdminsService) {}

  @Get(':adminId')
  async getAdmin(@Param('adminId') adminId: string): Promise<Admin> {
    return this.adminsService.getAdminById(adminId);
  }

  @Get()
  async getAdmins(): Promise<Admin[]> {
      return this.adminsService.getAdmins();
  }

  @Post()
  async createAdmin(@Body() CreateAdminDto: CreateAdminDto): Promise<Admin> {
      return this.adminsService.createAdmin(CreateAdminDto.nom, CreateAdminDto.prenom , CreateAdminDto.email , CreateAdminDto.password)
  }

  @Patch(':userId')
  async updateAdmin(@Param('adminId') adminId: string, @Body() UpdateAdminDto: UpdateAdminDto): Promise<Admin> {
      return this.adminsService.updateAdmin(adminId, UpdateAdminDto);
  }

  @Delete(':adminId')
  async deleteAdmin(@Param('adminId') adminId: string): Promise<Admin> {
    return this.adminsService.deleteAdmin(adminId);
  }
}
