import { Category } from './category.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class CategoryBanner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  position: number;

  @Column({ nullable: false })
  url: string;

  @ManyToOne((type) => Category, (category) => category.categoryBanner)
  // @JoinColumn({ referencedColumnName: 'id' })
  category: Category;
}
