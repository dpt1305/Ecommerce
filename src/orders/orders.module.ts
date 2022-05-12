import { VouchersModule } from './../vouchers/vouchers.module';
import { UsersModule } from './../users/users.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { FlashsalesModule } from './../flashsales/flashsales.module';
import { ItemFlashsalesModule } from './../item-flashsales/item-flashsales.module';
import { ItemsModule } from './../items/items.module';
import { OrderDetailsRepository } from './order-details.repository';
import { OrdersRepository } from './orders.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderDetailsService } from './order-details.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, OrderDetailsService],
  imports: [
    TypeOrmModule.forFeature([OrdersRepository, OrderDetailsRepository]),
    ItemsModule,
    ItemFlashsalesModule,
    FlashsalesModule,
    NestjsFormDataModule,
    UsersModule,
    VouchersModule,
  ],
  exports: [OrderDetailsService, OrdersService],
})
export class OrdersModule {}
