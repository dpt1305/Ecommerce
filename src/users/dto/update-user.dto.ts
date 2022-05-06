import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Role } from './../entities/user.entity';
import {
  IsString,
  IsEmail,
  IsMobilePhone,
  IsEnum,
  IsDate,
  IsBooleanString,
  IsNotEmpty,
  IsOptional,
  IsArray,
} from 'class-validator';
// import { Type}
export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsMobilePhone('vi-VN')
  phone?: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  birthday?: Date;

  @ApiProperty({ type: 'string', format: 'binary' })
  @IsOptional()
  avatar?: string;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  address?: string[];
}
