import { Request, Response } from 'express';

import { randomUUID } from 'crypto';
import { UserSaveUseCase } from '../../aplication';

export class UserSaveController {
  constructor(private readonly userSave: UserSaveUseCase) {}

  async run(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
      const user = await this.userSave.run({
        id: randomUUID(),
        name,
        email,
        password,
        posts: [],
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({
        message: 'Internal server error',
        error,
      });
    }
  }
}
