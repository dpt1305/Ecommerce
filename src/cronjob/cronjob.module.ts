import { ItemFlashsalesModule } from './../item-flashsales/item-flashsales.module';
import { FlashsalesModule } from './../flashsales/flashsales.module';
import { CronjobService } from './cronjob.service';
import { ItemsModule } from './../items/items.module';
import { Module } from '@nestjs/common';

@Module({
  providers: [CronjobService],
  imports: [
    ItemsModule,
    FlashsalesModule,
    ItemFlashsalesModule
  ],
})
export class CronjobModule {}
