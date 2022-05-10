import { OrdersModule } from './../orders/orders.module';
import { FlashsalesModule } from './../flashsales/flashsales.module';
import { ItemsModule } from './../items/items.module';
import { ItemFlashsalesRepository } from './item-flashsales.repository';
import { Module } from '@nestjs/common';
import { ItemFlashsalesService } from './item-flashsales.service';
import { ItemFlashsalesController } from './item-flashsales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ItemFlashsalesController],
  providers: [ItemFlashsalesService],
  imports: [
    TypeOrmModule.forFeature([ItemFlashsalesRepository]),
    ItemsModule,
    FlashsalesModule,
  ],
})
export class ItemFlashsalesModule {}
