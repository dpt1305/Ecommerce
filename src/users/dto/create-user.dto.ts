import { ApiProperty } from '@nestjs/swagger';
import { Role } from './../entities/user.entity';
import {
  IsString,
  IsEmail,
  IsMobilePhone,
  IsEnum,
  IsDate,
  IsBooleanString,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true })
  name: string;

  @ApiProperty({ type: String })
  @IsMobilePhone('vi-VN')
  phone: string;

  @IsEmail()
  @ApiProperty({ type: String })
  @IsNotEmpty()
  email: string;

  @IsString()
  @ApiProperty({ type: String })
  @IsNotEmpty()
  password: string;

  @IsDate()
  @ApiProperty({ type: 'string', format: 'date' })
  @Type(() => Date)
  birthday: Date;

  @ApiProperty({ type: 'string', format: 'binary' })
  avatar: string;

  @IsEnum(Role)
  @ApiProperty({ enum: Role, default: Role.User })
  @IsNotEmpty()
  role: Role;

  @ApiProperty({ type: 'array' })
  @IsString()
  address: string;
}
