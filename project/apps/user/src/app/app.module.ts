import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BlogUserModule } from '@project/blog-user';
import { AuthenticationModule } from '@project/authentication';
import { UserConfigModule, getMongooseOptions } from '@project/user-config';
import { NotificationsModule } from '@project/user-notifications';

@Module({
  imports: [
    BlogUserModule,
    AuthenticationModule,
    UserConfigModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
    NotificationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
