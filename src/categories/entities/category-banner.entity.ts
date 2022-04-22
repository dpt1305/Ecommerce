import { Category } from './category.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class CategoryBanner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  position: number;

  @Column()
  url: string;

  @Column({ nullable: true })
  categoryId: string;

  @OneToOne((type) => Category, (category) => category.categoryBanner)
  @JoinColumn({ referencedColumnName: 'id' })
  category: Category;
}
