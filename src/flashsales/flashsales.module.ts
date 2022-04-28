import { Module } from '@nestjs/common';
import { FlashsalesService } from './flashsales.service';
import { FlashsalesController } from './flashsales.controller';

@Module({
  controllers: [FlashsalesController],
  providers: [FlashsalesService]
})
export class FlashsalesModule {}
