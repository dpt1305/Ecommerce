import { CronjobService } from './cronjob.service';
import { ItemsModule } from './../items/items.module';
import { Module } from '@nestjs/common';

@Module({
  providers: [CronjobService],
  imports: [
    ItemsModule,
  ],
})
export class CronjobModule {}
