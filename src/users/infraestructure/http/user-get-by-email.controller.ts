import express from 'express';
import { UserByEmailFinder } from '../../aplication';

import { UserNotFound } from '../../domain/errors/user-not-found';

export class UserGetController {
  constructor(private readonly userByEmailFinder: UserByEmailFinder) {}

  async run(req: express.Request, res: express.Response) {
    const email = req.params.email;
    try {
      const user = await this.userByEmailFinder.run(email);

      res.status(200).json({
        message: 'User found successfully',
        user,
      });
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({
          message: 'User not found',
          error,
        });
      }

      return res.status(500).json({
        message: 'Internal server error',
        error,
      });
    }
  }
}
