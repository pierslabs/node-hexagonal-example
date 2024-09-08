import { UserByEmailFinder } from '../aplication/use-cases/user-by-email-finder';
import { PgUserRepository } from './repository/pg-user-repository';

import { UserSaveUseCase } from '../aplication/use-cases/user-save';
import { UserGetController } from './http/user-get-by-email.controller';
import { UserSaveController } from './http/user-save.controller';
import { UserFindAll } from '../aplication/use-cases/user-find-all';
import { UserFindAllController } from './http/user-get-all.controller';

const pgUserRepository = new PgUserRepository();

const userByEmailFinder = new UserByEmailFinder(pgUserRepository);
const userSave = new UserSaveUseCase(pgUserRepository);
const userFindAll = new UserFindAll(pgUserRepository);

export const userGetController = new UserGetController(userByEmailFinder);
export const userSaveController = new UserSaveController(userSave);
export const userFindAllController = new UserFindAllController(userFindAll);
