import { User } from './user';

export interface UserRepository {
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findAll(): Promise<User[]>;
}
