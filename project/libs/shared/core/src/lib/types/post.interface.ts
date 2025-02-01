import { BlogContents } from './blog-contents';
import { PostTypes } from './post-types';

export interface Post {
  id?: string;
  type: (typeof PostTypes)[keyof typeof PostTypes];
  authorId: string;
  published: boolean;
  reposted: boolean;
  originalId?: string;
  originalAuthorId?: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
  content: BlogContents[(typeof PostTypes)[keyof typeof PostTypes]];
  likesCount: number;
  commentsCount: number;
}
