import { CategoryBanner } from './category-banner.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

export enum CategoryStatus {
  Inactive,
  Active,
}
@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column('text')
  status: CategoryStatus;

  // @Column( { nullable: true })
  // cate
  @OneToMany(
    (type) => CategoryBanner,
    (categoryBanner) => categoryBanner.category,
  )
  @JoinColumn({ referencedColumnName: 'categoryId' })
  categoryBanner: CategoryBanner[];
}
