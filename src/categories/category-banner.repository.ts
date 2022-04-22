import { CreateCategoryBannerDto } from './dto/create-category-banner.dto';
import { CategoryBanner } from './entities/category-banner.entity';
import { EntityRepository, Repository } from 'typeorm';
// import { CreateCategoryBannerDto}
@EntityRepository(CategoryBanner)
export class CategoryBannerRepository extends Repository<CategoryBanner> {
  async createCategoryBanner(createCategoryBannerDto: CreateCategoryBannerDto) {
    try {
      console.log(createCategoryBannerDto);
      const newCategoryBanner = await this.create({
        ...createCategoryBannerDto,
      });
      return await this.save(newCategoryBanner);
    } catch (error) {
      throw new Error('Can not create a category banner.');
    }
  }
}
