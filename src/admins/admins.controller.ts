import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('운영자 (Admins)')
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) { }

  @ApiOperation({ summary: '운영자 생성 (Create Admin)' })
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @ApiOperation({ summary: '운영자 전체 조회 (Find All Admins)' })
  @Get()
  findAll() {
    return this.adminsService.findAll();
  }

  @ApiOperation({ summary: '운영자 상세 조회 (Find One Admin)' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(id);
  }

  @ApiOperation({ summary: '운영자 정보 수정 (Update Admin)' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(id, updateAdminDto);
  }

  @ApiOperation({ summary: '운영자 삭제 (Delete Admin)' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsService.remove(id);
  }
}
