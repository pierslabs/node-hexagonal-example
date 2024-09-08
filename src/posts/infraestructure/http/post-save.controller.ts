import { Request, Response } from 'express';
import { PostSaveUseCase } from '../../aplication';

export class PostSaveController {
  constructor(private readonly postSave: PostSaveUseCase) {}

  async run(req: Request, res: Response) {
    const { title, content, userId } = req.body;

    try {
      const newPost = await this.postSave.run({
        title,
        content,
        userId,
      });

      res.status(200).json({
        message: 'Post created successfully',
        post: newPost,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Internal server error',
        error,
      });
    }
  }
}
