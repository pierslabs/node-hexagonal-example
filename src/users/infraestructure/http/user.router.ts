import express from 'express';
import {
  userFindAllController,
  userGetController,
  userSaveController,
} from '../dependencies';
import { validateDto } from '../../../shared';
import { UserCreateDTO } from './dto/user-create.dto';

const userRouter = express.Router();

userRouter.post(
  '/',
  validateDto(UserCreateDTO),
  userSaveController.run.bind(userSaveController)
);

// Not use, is a bad practice to use the email as a parameter only is a example
userRouter.get('/:email', userGetController.run.bind(userGetController));

userRouter.get('/', userFindAllController.run.bind(userFindAllController));

export { userRouter };
