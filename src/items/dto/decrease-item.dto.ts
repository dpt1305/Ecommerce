import { IsNumberString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class DecreaseItemDto {
  @ApiProperty()
  @IsNumber()
  orderNumber: number;
}
