import { ItemFlashsale } from './entities/item-flashsale.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(ItemFlashsale)
export class ItemFlashsalesRepository extends Repository<ItemFlashsale> {}
