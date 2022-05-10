import { OrderDetail } from './entities/order-detail.entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(OrderDetail)
export class OrderDetailsRepository extends Repository<OrderDetail> {}
