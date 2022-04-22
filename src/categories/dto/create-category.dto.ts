import { CategoryStatus } from './../entities/category.entity';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
// import { CategoryStatus
export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(CategoryStatus)
  @IsNotEmpty()
  status: CategoryStatus;
}
