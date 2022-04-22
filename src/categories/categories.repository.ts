import { CreateCategoryDto } from './dto/create-category.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
@EntityRepository(Category)
export class CategoriesRepository extends Repository<Category> {
  // async create(createCategoryDto: CreateCategoryDto) {
  //   return await this.create({ ...createCategoryDto });
  // }
  async createCategory(createCategoryDto: CreateCategoryDto) {
    try {
      // const { status } = createCategoryDto;
      const newCategory = await this.create({ ...createCategoryDto });
      console.log(newCategory);

      return await this.save(newCategory);
    } catch (error) {
      throw new Error(error);
    }
  }
}
