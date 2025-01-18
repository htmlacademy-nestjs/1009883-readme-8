import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  NotificationsConfigModule,
  getMongooseOptions,
} from '@project/notifications-config';
import { EmailSubscriberModule } from '@project/email-subscriber';

@Module({
  imports: [
    MongooseModule.forRootAsync(getMongooseOptions()),
    NotificationsConfigModule,
    EmailSubscriberModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
