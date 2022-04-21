import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedbackComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 500 })
  comment: string;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false })
  createdAt: Date;
}
