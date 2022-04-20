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

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsMobilePhone('vn_VN')
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsDate()
  birthday: Date;

  @IsString()
  avatar: string;

  @IsEnum(Role)
  // @IsNotEmpty()
  role: Role;

  @IsString()
  address: string;
}
