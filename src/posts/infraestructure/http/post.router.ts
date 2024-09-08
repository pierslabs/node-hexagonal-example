import express from 'express';
import { postSaveController } from '../dependencies';
const postRouter = express.Router();

postRouter.post('/', postSaveController.run.bind(postSaveController));

export { postRouter };
