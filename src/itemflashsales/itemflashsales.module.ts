import { Module } from '@nestjs/common';
import { ItemflashsalesController } from './itemflashsales.controller';
import { ItemflashsalesService } from './itemflashsales.service';

@Module({
  controllers: [ItemflashsalesController],
  providers: [ItemflashsalesService]
})
export class ItemflashsalesModule {}
