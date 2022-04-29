import { IsOptional } from 'class-validator';
import { DecreaseItemDto } from './dto/decrease-item.dto';
import { Item } from './entities/item.entity';
import { ImageItem } from './entities/image-item.entity';
import { ImageItemRepository } from './image-item.repository';
import { Category } from './../categories/entities/category.entity';
import { CategoriesService } from './../categories/categories.service';
import { ItemsRepository } from './items.repository';
import { ApiTags, ApiBody, ApiConsumes } from '@nestjs/swagger';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs-extra';
import { diskStorage } from 'multer';


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
    const item = await this.itemsRepository.findOne({ id });
    if (!item) throw new NotFoundException('Not found item');
    return item;
  }

  async update(
    id: string,
    updateItemDto: UpdateItemDto,
    file: Express.Multer.File,
  ) {
    const item = await this.itemsRepository.findOne({ id });

    fs.remove(item.avatar, async (err) => {
      if (err) throw new Error('Can not update avatar');

      const update = { ...item, ...updateItemDto, avatar: file.path };
      await this.itemsRepository.save(update);
      return update;
    });
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

  async decreaseItemQuantity(id: string, decreaseItemDto: DecreaseItemDto) {
    const item = await this.findOne(id);

    const { orderNumber } = decreaseItemDto;

    if (item.quantity < orderNumber) {
      throw new BadRequestException(
        'Order number is bigger than quantity of item',
      );
    }
    item.quantity -= orderNumber;
    return await this.itemsRepository.save(item);
  }
}
