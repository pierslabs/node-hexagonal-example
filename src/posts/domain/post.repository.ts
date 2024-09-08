import { Post } from './post';

export interface PostRepository {
  save(post: Post): Promise<Post>;
  getById(id: string): Promise<Post>;
  getAll(): Promise<Post[]>;
  delete(id: string): Promise<void>;
}
