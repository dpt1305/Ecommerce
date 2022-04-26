import { CategoryStatus } from './../entities/category.entity';
import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';
import {
  IsString,
  IsEnum,
  ValidateIf,
  IsOptional,
  Matches,
} from 'class-validator';
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEnum(CategoryStatus)
  status: CategoryStatus;
}
