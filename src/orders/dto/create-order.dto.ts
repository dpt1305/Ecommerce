import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from './../entities/order.entity';
import { IsString, IsNumber, IsEnum, IsOptional } from 'class-validator';
// ApiProperty
export class CreateOrderDto {
  @IsString()
  @ApiProperty({ type: String })
  userId: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, required: false })
  voucherId: string;

  @IsString()
  @ApiProperty({ type: String })
  addressShipping: string;

  @IsEnum({ enum: OrderStatus })
  @IsOptional()
  status: OrderStatus;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number, required: false })
  shippingPrice: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number, required: false })
  itemsPrice: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number, required: false })
  total: number;
}
