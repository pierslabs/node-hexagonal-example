import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserOrmEntity } from '../../../users/infraestructure/entities/userOrm.entity';

@Entity('posts')
export class PostOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => UserOrmEntity, (user) => user.posts)
  userId: string;
}
