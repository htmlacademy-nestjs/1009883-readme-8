import { Module } from '@nestjs/common';

import { BlogCommentModule } from '@project/blog-comment';
import { PrismaClientModule } from '@project/blog-models';
import { BlogNotificationsModule } from '@project/blog-notifications';

import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';
import { BlogPostRepository } from './blog-post.repository';
import { BlogPostFactory } from './blog-post.factory';

@Module({
  imports: [BlogCommentModule, PrismaClientModule, BlogNotificationsModule],
  controllers: [BlogPostController],
  providers: [BlogPostService, BlogPostRepository, BlogPostFactory],
  exports: [BlogPostService],
})
export class BlogPostModule {}
