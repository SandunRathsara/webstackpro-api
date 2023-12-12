import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENVS } from '@/configs/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('ROOT');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({
    origin: configService.get<string>(ENVS.CORS_ALLOWED_ORIGIN),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  await app.listen(configService.get<string>(ENVS.PORT), () =>
    logger.log(
      `Web Stack Pro Server Started. http://localhost:${configService.get<string>(
        ENVS.PORT,
      )}`,
    ),
  );
}

bootstrap();
