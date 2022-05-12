import { Item } from './../../items/entities/item.entity';
import { CategoryBanner } from './category-banner.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

export enum CategoryStatus {
  Inactive = 'Inactive',
  Active = 'Active',
}
@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({
    type: 'enum',
    enum: CategoryStatus,
    default: CategoryStatus.Active,
  })
  status: CategoryStatus;

  @OneToMany((type) => Item, (item) => item.category)
  item: Item[];

  @OneToMany(
    (type) => CategoryBanner,
    (categoryBanner) => categoryBanner.category,
  )
  categoryBanner: CategoryBanner[];
}
