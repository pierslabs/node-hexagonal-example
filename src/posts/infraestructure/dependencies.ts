import { PostSaveUseCase } from '../aplication';
import { PostSaveController } from './http/post-save.controller';
import { PgPostRepositoryAdapter } from './repository';

const postPgRepository = new PgPostRepositoryAdapter();

const postSave = new PostSaveUseCase(postPgRepository);

export const postSaveController = new PostSaveController(postSave);
