import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsJSON, Length, Matches } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({
    description: '운영자 아이디 (영문, 숫자 포함 8~30자)',
    example: 'admin123',
    minLength: 8,
    maxLength: 30,
  })
  @IsString()
  @Length(8, 30)
  admin_id: string;

  @ApiProperty({
    description: '비밀번호',
    example: 'securePassword!@#',
    minLength: 8,
    maxLength: 255,
  })
  @IsString()
  @Length(8, 255)
  password: string;

  @ApiProperty({
    description: '담당자명',
    example: '홍길동',
    maxLength: 50,
  })
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({
    description: '전화번호',
    example: '010-1234-5678',
    maxLength: 20,
  })
  @IsString()
  @Length(1, 20)
  phone: string;

  @ApiProperty({
    description: '이메일',
    example: 'admin@matpan.com',
    maxLength: 100,
  })
  @IsEmail()
  @Length(1, 100)
  email: string;

  @ApiProperty({
    description: '직위',
    example: '최고관리자',
    required: false,
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  position?: string;

  @ApiProperty({
    description: '권한 설정 (JSON)',
    example: { posts: 'read-write', users: 'read' },
    required: false,
  })
  @IsOptional()
  permission_settings?: any;
}
