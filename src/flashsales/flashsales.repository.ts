import { Flashsale } from './entities/flashsale.entity';
import { Repository, EntityRepository } from 'typeorm';
@EntityRepository(Flashsale)
export class FlashsalesRepository extends Repository<Flashsale> {}
