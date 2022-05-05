import { Flashsale } from './entities/flashsale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlashsalesRepository } from './flashsales.repository';
import { Module } from '@nestjs/common';
import { FlashsalesService } from './flashsales.service';
import { FlashsalesController } from './flashsales.controller';

@Module({
  controllers: [FlashsalesController],
  providers: [FlashsalesService],
  imports: [TypeOrmModule.forFeature([FlashsalesRepository])],
  exports: [FlashsalesService],
})
export class FlashsalesModule {}
