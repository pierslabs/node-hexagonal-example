import { User } from '../../domain/user';
import { UserRepository } from '../../domain/user.repository';

export class UserSaveUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async run(user: User): Promise<User> {
    const existingUser = await this.userRepository.save(user);

    return existingUser;
  }
}
