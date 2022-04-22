import { CategoryStatus } from './../entities/category.entity';
// import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';
import { IsString, IsEnum } from 'class-validator';
export class UpdateCategoryDto {
  @IsString()
  name?: string;

  @IsEnum(CategoryStatus)
  status?: CategoryStatus;
}
