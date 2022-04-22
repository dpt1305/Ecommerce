import { IsString, IsNumberString, IsNotEmpty } from 'class-validator';
// import { CreateCategoryBannerDto } from './../../category/dto/create-category-banner.dto';
export class CreateCategoryBannerDto {
  @IsNumberString()
  @IsNotEmpty()
  position: number;

  @IsString()
  url: string;

  @IsString()
  @IsNotEmpty()
  categoryId: string;
}
