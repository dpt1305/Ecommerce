import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { VoucherType } from './../entities/voucher.entity';
import { IsString, IsNumber, IsInt, IsDate, IsEnum } from 'class-validator';
// import { VoucherType}
export class CreateVoucherDto {
  @IsString()
  @ApiProperty({ type: String })
  code: string;

  @IsEnum(VoucherType)
  @ApiProperty({ enum: VoucherType })
  @IsString()
  type: VoucherType;

  @ApiProperty({ type: String })
  @IsString()
  note: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  discount: number;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  max: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  min: number;

  @ApiProperty({ type: Number })
  @IsInt()
  quantity: number;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  startTime: Date;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  endTime: Date;
}
