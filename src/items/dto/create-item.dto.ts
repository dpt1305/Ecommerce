import { Type } from 'class-transformer';
import { ItemStatus } from './../entities/item.entity';
import { Category } from './../../categories/entities/category.entity';
import {
  IsString,
  IsNumberString,
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
  @Type(() => Number)
  @IsNotEmpty()
  @ApiProperty()
  importPrice: number;

  @IsNumberString()
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty()
  price: number;

  @IsNumberString()
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty()
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
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty()
  quantity: number;

  @ApiProperty()
  @IsString()
  description: string;

  @IsEnum(ItemStatus)
  @ApiProperty({ enum: ItemStatus })
  @IsOptional()
  status: ItemStatus;
}
