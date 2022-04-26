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
  async create(
    createCategoryDto: CreateCategoryDto,
    files: Array<Express.Multer.File>,
  ) {
    const { name, status } = createCategoryDto;
    const category = await this.categoriesRepository.create({
      name,
      status,
    });
    await this.categoriesRepository.save(category);

    files.forEach(async (element, index) => {
      const newBanner = await this.categoryBannerRepository.create({
        position: index + 1,
        url: element.path,
        category,
      });
      await this.categoryBannerRepository.save(newBanner);
    });
    return category;
  }

  findAll() {
    return this.categoriesRepository.find();
  }

  async findOne(id: string) {
    const category = await this.categoriesRepository.findOne({ id });
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    console.log(updateCategoryDto);
    
    const result = await this.categoriesRepository.save({
      id,
      ...updateCategoryDto,
    });
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
