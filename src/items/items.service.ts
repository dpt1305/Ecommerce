import { CategoriesService } from './../categories/categories.service';
import { ItemsRepository } from './items.repository';
import { ApiTags, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
  constructor(
    private categoriesService: CategoriesService,
    @InjectRepository(ItemsRepository)
    private itemsRepository: ItemsRepository,
  ) {}
  async create(createItemDto: CreateItemDto, categoryId: string, files: any) {
    const category = this.categoriesService.findOne(categoryId);
    const newItem = await this.itemsRepository.create({
      ...createItemDto,
    });
    await this.itemsRepository.save(newItem);
    return newItem;
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
