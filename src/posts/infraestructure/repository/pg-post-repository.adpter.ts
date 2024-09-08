import { Repository } from 'typeorm';
import { Post, PostRepository } from '../../domain';

import { AppDataSource } from '../../../config/db/pg.config';
import { PostOrmEntity } from '../entities/postOrmEntity';

export class PgPostRepositoryAdapter implements PostRepository {
  private readonly ormRepository: Repository<PostOrmEntity>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(PostOrmEntity);
  }

  async save(post: Post): Promise<Post> {
    return this.ormRepository.save(post);
  }
  getById(id: string): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Post[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
