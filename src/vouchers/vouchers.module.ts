import { VouchersRepository } from './vouchers.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';

@Module({
  controllers: [VouchersController],
  providers: [VouchersService],
  imports: [
    TypeOrmModule.forFeature([VouchersRepository])
  ],
  exports: [VouchersService],
})
export class VouchersModule {}
