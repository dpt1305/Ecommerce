import { Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  
}