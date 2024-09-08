import { User } from '../../domain/user';
import { UserRepository } from '../../domain/user.repository';

interface UserFindAllResponse {
  id: string;
  name: string;
  email: string;
  password: string;
  posts: any[];
}

export class UserFindAll {
  constructor(private readonly userRepository: UserRepository) {}

  async run(): Promise<UserFindAllResponse[]> {
    return this.userRepository.findAll();
  }
}
