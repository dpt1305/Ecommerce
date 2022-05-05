import { Voucher } from './entities/voucher.entity';
import { Repository, EntityRepository } from 'typeorm';
@EntityRepository(Voucher)
export class VouchersRepository extends Repository<Voucher> {}
