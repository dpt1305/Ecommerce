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
  name: string;

  @IsMobilePhone('vi-VN')
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsDate()
  @Type(() => Date)
  birthday: Date;

  @IsString()
  avatar: string;

  // @IsEnum(Role)
  // // @IsNotEmpty()
  // role: Role;

  @IsString()
  address: string;
}
