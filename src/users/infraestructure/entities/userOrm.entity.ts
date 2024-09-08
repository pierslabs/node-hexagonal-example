// src/infrastructure/persistence/typeorm/entities/User.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PostOrmEntity } from '../../../posts/infraestructure/entities/postOrmEntity';

@Entity('user')
export class UserOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    length: 100,
    nullable: false,
  })
  email: string;

  @Column('varchar', {
    length: 100,
    nullable: false,
  })
  password: string;

  @OneToMany(() => PostOrmEntity, (post) => post.userId, {
    eager: true,
  })
  posts: PostOrmEntity[];
}
