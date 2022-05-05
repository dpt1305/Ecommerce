import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsInt } from 'class-validator';
// ApiProperty
export class CreateItemFlashsaleDto {
  @IsNumber()
  @ApiProperty()
  discount: number;

  @ApiProperty()
  @IsInt()
  quantity: number;

  @ApiProperty()
  @IsString()
  flashsale: string;

  @ApiProperty()
  @IsString()
  item: string;
}
