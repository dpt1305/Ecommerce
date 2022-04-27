import { CreateCategoryBannerDto } from './create-category-banner.dto';
import { CategoryStatus } from './../entities/category.entity';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
// import { CategoryStatus
export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(CategoryStatus)
  @IsNotEmpty()
  status: CategoryStatus;

  // banners: CreateCategoryBannerDto[];
}
