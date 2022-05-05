import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: false })
  contentId: string;

  @Column({ nullable: false })
  userId: number;
}
