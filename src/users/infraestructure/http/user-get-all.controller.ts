import { UserFindAll } from '../../aplication/use-cases/user-find-all';
import { Request, Response } from 'express';

export class UserFindAllController {
  constructor(private readonly userFindAll: UserFindAll) {}

  async run(_: Request, res: Response) {
    try {
      const users = await this.userFindAll.run();
      res.status(200).json({
        message: 'Users found successfully',
        users,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Internal server error',
        error,
      });
    }
  }
}
