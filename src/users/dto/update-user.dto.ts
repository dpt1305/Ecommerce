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
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name?: string;

  @IsMobilePhone('vn_VN')
  phone?: string;

  @IsDate()
  birthday?: Date;

  @IsString()
  avatar?: string;

  @IsString()
  address?: string;
}
