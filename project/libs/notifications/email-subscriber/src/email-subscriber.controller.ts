import { Controller } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Post, RabbitRouting } from '@project/shared-core';

import { EmailSubscriberService } from './email-subscriber.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { MailService } from './mail-module/mail.service';

@Controller()
export class EmailSubscriberController {
  constructor(
    private readonly subscriberService: EmailSubscriberService,
    private readonly mailService: MailService
  ) {}

  @RabbitSubscribe({
    exchange: 'readme-8.notifications',
    routingKey: RabbitRouting.AddSubscriber,
    queue: 'readme-8.notifications.income',
  })
  public async create(data: { type: string; subscriber: CreateSubscriberDto }) {
    console.log(`Notify create type: ${data?.type}`);
    if (data?.type !== RabbitRouting.AddSubscriber) return;

    console.log('notify create');

    await this.subscriberService.addSubscriber(data.subscriber);
    await this.mailService.sendNotifyNewSubscriber(data.subscriber);
  }

  @RabbitSubscribe({
    exchange: 'readme-8.notifications',
    routingKey: RabbitRouting.NotifyNewPosts,
    queue: 'readme-8.notifications.newPosts',
  })
  public async notifyNewPosts(data: { type: string; posts: Post[] }) {
    console.log(`Notify new posts type: ${data?.type}`);
    if (data?.type !== RabbitRouting.NotifyNewPosts) return;

    console.log('notify new posts');

    const subscribers = await this.subscriberService.getAllSubscribers();

    for (const subscriber of subscribers) {
      await this.mailService.sendNotifyNewPosts(
        data?.posts,
        subscriber.toPOJO()
      );
    }
  }
}
