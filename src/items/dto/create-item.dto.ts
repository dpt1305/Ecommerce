import { Type } from 'class-transformer';
import { ItemStatus } from './../entities/item.entity';
import { Category } from './../../categories/entities/category.entity';
import {
  IsString,
  IsNumberString,
  IsNumber,
  IsNotEmpty,
  IsInt,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
// import { Column } from 'typeorm';
export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  barcode: string;

  @IsNumberString()
  @ApiProperty({ type: 'number', format: 'float' })
  @IsNotEmpty()
  importPrice: number;

  @IsNumberString()
  @ApiProperty({ type: 'number', format: 'float' })
  @IsNotEmpty()
  price: number;

  @IsNumberString()
  @ApiProperty({ type: 'number', format: 'float' })
  @IsNotEmpty()
  weight: number;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   type: 'array',
  //   items: {
  //     type: 'string',
  //     format: 'binary',
  //   },
  // })
  // avatar: string;

  @IsNumberString()
  @ApiProperty({ type: 'integer' })
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @IsString()
  description: string;

  @IsEnum(ItemStatus)
  @ApiProperty({ enum: ItemStatus })
  @IsOptional()
  status: ItemStatus;

  @ApiProperty({ type: 'string', format: 'binary' })
  itemAvatar: Express.Multer.File;
}
