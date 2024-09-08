import { Post, PostRepository } from '../../domain';

export class PostSaveUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async run(post: Post): Promise<Post> {
    return this.postRepository.save(post);
  }
}
