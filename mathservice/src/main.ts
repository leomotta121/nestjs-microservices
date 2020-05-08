import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  });

  app.listen(() => {
    logger.log('Microservice math is listening...');
  });
}
bootstrap();
