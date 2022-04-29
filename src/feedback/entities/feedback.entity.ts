import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 50 })
  category: string;

  @Column({ nullable: false })
  description: string;

  @Index('idx_actioned')
  @Column({ nullable: false, default: false })
  actioned: boolean;

  @Column()
  createdAt: Date;

  @Column({ nullable: false })
  contentId: string;

  @Column({ nullable: false })
  userId: number;
}
