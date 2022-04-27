import { NestjsFormDataModule } from 'nestjs-form-data';
import { CategoriesRepository } from './categories.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoryBannerRepository } from './category-banner.repository';
// import { NestjsFormDataModule}
@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    TypeOrmModule.forFeature([CategoriesRepository]),
    TypeOrmModule.forFeature([CategoryBannerRepository]),
    NestjsFormDataModule,
  ],
  exports: [CategoriesService],
})
export class CategoriesModule {}
