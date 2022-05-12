import { Type } from 'class-transformer';
import { IsNumber, IsInt, IsOptional, IsNumberString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateItemFlashsaleDto } from './create-item-flashsale.dto';

export class UpdateItemFlashsaleDto {
  @IsNumber()
  // @Type(() => Number)
  @IsOptional()
  @ApiProperty({ required: false })
  discount?: number;

  @IsOptional()
  @ApiProperty({ required: false })
  @IsInt()
  quantity?: number;
}
