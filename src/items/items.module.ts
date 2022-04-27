import { CategoriesModule } from './../categories/categories.module';
import { ImageItemRepository } from './image-item.repository';
import { ItemsRepository } from './items.repository';
import { ImageItem } from './entities/image-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item } from './entities/item.entity';
@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  imports: [
    TypeOrmModule.forFeature([ItemsRepository]),
    TypeOrmModule.forFeature([ImageItemRepository]),
    CategoriesModule,
  ],
})
export class ItemsModule {}
