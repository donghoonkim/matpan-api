import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class LoginAdminDto {
  @ApiProperty({
    description: '운영자 아이디',
    example: 'admin123',
  })
  @IsString()
  @Length(8, 30)
  admin_id: string;

  @ApiProperty({
    description: '비밀번호',
    example: 'securePassword!@#',
  })
  @IsString()
  password: string;
}
