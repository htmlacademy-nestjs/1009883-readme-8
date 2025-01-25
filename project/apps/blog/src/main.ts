import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

const GLOBAL_PREFIX = 'api';
const DEFAULT_PORT = 3002;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(GLOBAL_PREFIX);
  // const port = process.env.PORT || DEFAULT_PORT;
  const port = DEFAULT_PORT;

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${GLOBAL_PREFIX}`
  );
}

bootstrap();
