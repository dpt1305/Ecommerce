import { Item } from './entities/item.entity';
import { Repository, EntityRepository } from 'typeorm';
@EntityRepository(Item)
export class ItemsRepository extends Repository<Item> {}
