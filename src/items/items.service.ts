import { Item } from './entities/item.entity';
import { ImageItem } from './entities/image-item.entity';
import { ImageItemRepository } from './image-item.repository';
import { Category } from './../categories/entities/category.entity';
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
    @InjectRepository(ImageItemRepository)
    private imageItemRepository: ImageItemRepository,
  ) {}
  async create(createItemDto: CreateItemDto, categoryId: string, files: any) {
    const category = await this.categoriesService.findOne(categoryId);

    const newItem = await this.itemsRepository.create({
      ...createItemDto,
      avatar: files.avatar[0].path,
      category,
    });
    await this.itemsRepository.save(newItem);

    files.images.forEach(async (element, index) => {
      const newImageItem = await this.imageItemRepository.create({
        url: element.path,
        item: newItem,
      });
      await this.imageItemRepository.save(newImageItem);
    });

    return newItem;
  }

  async findAll() {
    return await this.itemsRepository.find();
  }

  async findOne(id: string) {
    return await this.itemsRepository.find({ id });
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    const item = await this.itemsRepository.findOne({ id });
    const update = { ...item, ...updateItemDto };
    await this.itemsRepository.save(update);
    return update;
  }

  async remove(id: string) {
    try {
      await this.itemsRepository
        .createQueryBuilder()
        .delete()
        .from(ImageItem)
        .where('item = :id', { id })
        .execute();
      await this.itemsRepository
        .createQueryBuilder()
        .delete()
        .from(Item)
        .where('id = :id', { id })
        .execute();
      return 'Remove successfully.';
    } catch (error) {
      throw new Error('Can not delete.');
    }
  }
}
