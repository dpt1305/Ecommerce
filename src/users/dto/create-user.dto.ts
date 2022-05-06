import { ApiProperty } from '@nestjs/swagger';
import { Role } from './../entities/user.entity';
import {
  IsString,
  IsEmail,
  IsMobilePhone,
  IsEnum,
  IsDate,
  IsBooleanString,
  IsArray,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: String, required: true })
  name: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsMobilePhone('vi-VN')
  phone?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ type: String })
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ type: String })
  @IsNotEmpty()
  password: string;

  @IsDate()
  @ApiProperty({ type: 'string', format: 'date' })
  @IsOptional()
  @Type(() => Date)
  birthday?: Date;

  @IsOptional()
  @ApiProperty({ type: 'string', format: 'binary' })
  avatar?: string;

  @IsEnum(Role)
  @IsOptional()
  @ApiProperty({ enum: Role, default: Role.User })
  role?: Role;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  address: [string];
}
