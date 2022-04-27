import { ImageItem } from './entities/image-item.entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(ImageItem)
export class ImageItemRepository extends Repository<ImageItem> {}