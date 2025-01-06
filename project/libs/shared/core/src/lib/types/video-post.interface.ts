import { BlogContents } from './blog-contents';
import { PostTypes } from './post-types';
import { Post } from './post.interface';

export interface VideoPost extends Post {
  content: BlogContents[typeof PostTypes.Video];
}
