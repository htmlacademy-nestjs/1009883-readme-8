import { BlogContents } from './blog-contents';
import { PostTypes } from './post-types';
import { Post } from './post.interface';

export interface QuotePost extends Post {
  content: BlogContents[typeof PostTypes.Quote];
}
