import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNumberString } from 'class-validator';
export class CreateOrderDetailDto {
  // @IsString()
  // @ApiProperty({ type: 'string' })
  // itemFlashsaleId: string;

  @IsString()
  @ApiProperty()
  itemId: string;

  @IsNumber()
  @ApiProperty({ type: 'number', format: 'int' })
  quantity: number;
}
