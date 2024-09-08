import { User } from '../../domain/user';

import { AppDataSource } from '../../../config/db/pg.config';
import { Repository } from 'typeorm';
import { UserOrmEntity } from '../entities/userOrm.entity';
import { UserRepository } from '../../domain/user.repository';

export class PgUserRepository implements UserRepository {
  private readonly ormRepository: Repository<UserOrmEntity>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(UserOrmEntity);
  }

  async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.ormRepository.findOneBy({ email });
    return user || null;
  }

  async findAll(): Promise<User[]> {
    return this.ormRepository.find();
  }
}
