import { ItemFlashsale } from './../../item-flashsales/entities/item-flashsale.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
@Entity()
export class Flashsale {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @Column('timestamp')
  startSale: Date;

  @Column('timestamp')
  endSale: Date;

  @Column('text', { array: true })
  flashSaleBanner: string[];

  @OneToMany(() => ItemFlashsale, (itemFlashsale) => itemFlashsale.flashsale)
  itemFlashsale: ItemFlashsale;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
