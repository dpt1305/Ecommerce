import { CreateCategoryDto } from './dto/create-category.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Category, CategoryStatus } from './entities/category.entity';
@EntityRepository(Category)
export class CategoriesRepository extends Repository<Category> {}
