import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    private readonly jwtService: JwtService,
  ) { }

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const { password, ...rest } = createAdminDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = this.adminRepository.create({ ...rest, password: hashedPassword });
    return await this.adminRepository.save(admin);
  }

  async findAll(): Promise<Admin[]> {
    return await this.adminRepository.find();
  }

  async findOne(id: string): Promise<Admin> {
    const admin = await this.adminRepository.findOneBy({ admin_id: id });
    if (!admin) {
      throw new NotFoundException(`Admin with ID "${id}" not found`);
    }
    return admin;
  }

  async update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    const admin = await this.findOne(id);
    if (updateAdminDto.password) {
      updateAdminDto.password = await bcrypt.hash(updateAdminDto.password, 10);
    }
    Object.assign(admin, updateAdminDto);
    return await this.adminRepository.save(admin);
  }

  async remove(id: string): Promise<void> {
    const result = await this.adminRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Admin with ID "${id}" not found`);
    }
  }

  async validateAdmin(loginAdminDto: LoginAdminDto): Promise<any> {
    const { admin_id, password } = loginAdminDto;
    const admin = await this.adminRepository.findOneBy({ admin_id });
    if (admin && (await bcrypt.compare(password, admin.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = admin;
      return result;
    }
    return null;
  }

  async login(admin: any) {
    const payload = { username: admin.admin_id, sub: admin.admin_id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
