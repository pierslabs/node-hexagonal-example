import { User } from '../../domain/user';
import { UserNotFound } from '../../domain/errors/user-not-found';
import { UserRepository } from '../../domain/user.repository';

export class UserByEmailFinder {
  constructor(private readonly userRepository: UserRepository) {}

  async run(email: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UserNotFound(email);
    }

    return user;
  }
}
