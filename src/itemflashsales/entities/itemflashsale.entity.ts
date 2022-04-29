import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ItemFlashSaleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  flashSaleId: string;

  @Column('float')
  discount: number;

  @Column('text')
  itemId: string;

  @Column('text')
  quantity: number;
}
