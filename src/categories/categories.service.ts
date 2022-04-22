import { CategoryBanner } from './entities/category-banner.entity';
import { Category } from './entities/category.entity';
import { CategoryBannerRepository } from './category-banner.repository';
import { CategoriesRepository } from './categories.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryBannerDto } from './dto/create-category-banner.dto';
@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: CategoriesRepository,
    @InjectRepository(CategoryBannerRepository)
    private categoryBannerRepository: CategoryBannerRepository,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoriesRepository.createCategory(createCategoryDto);
  }
  createBanner(createCategoryBannerDto: CreateCategoryBannerDto) {
    return this.categoryBannerRepository.createCategoryBanner(
      createCategoryBannerDto,
    );
  }

  findAll() {
    return this.categoriesRepository.find();
  }

  async findOne(id: string) {
    const category = await this.categoriesRepository.findOne({ id });
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const result = await this.categoriesRepository
      .createQueryBuilder()
      .update(Category)
      .set({ ...updateCategoryDto })
      .where({ id })
      .execute();
    const afterUpdate = await this.categoriesRepository.findOne({ id });
    return afterUpdate;
  }

  async remove(id: string) {
    try {
      await this.categoryBannerRepository
        .createQueryBuilder()
        .delete()
        .from(CategoryBanner)
        .where('categoryId = :id', { id })
        .execute();
      const result = await this.categoriesRepository
        .createQueryBuilder()
        .delete()
        .from(Category)
        .where('id = :id', { id })
        .execute();
      return result;
    } catch (error) {
      throw new Error('Can not delete.');
    }
  }
}
