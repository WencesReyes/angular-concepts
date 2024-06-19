import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/posts/post';

export const postResolverResolver: ResolveFn<Post> = (route, state) => {
  return inject(PostService).getAll();
};
