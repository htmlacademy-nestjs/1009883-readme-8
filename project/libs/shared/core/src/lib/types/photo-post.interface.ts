import { BlogContents } from './blog-contents';
import { PostTypes } from './post-types';
import { Post } from './post.interface';

export interface PhotoPost extends Post {
  content: BlogContents[typeof PostTypes.Photo];
}
