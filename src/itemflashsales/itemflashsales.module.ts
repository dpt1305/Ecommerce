import { ItemFlashSaleEntity } from './entities/itemflashsale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ItemflashsalesController } from './itemflashsales.controller';
import { ItemflashsalesService } from './itemflashsales.service';

@Module({
  controllers: [ItemflashsalesController],
  providers: [ItemflashsalesService],
  imports: [TypeOrmModule.forFeature([ItemFlashSaleEntity])],
})
export class ItemflashsalesModule {}
