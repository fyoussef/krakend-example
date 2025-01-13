import { NestFactory } from '@nestjs/core';
import { TimeModule } from './time.module';

async function bootstrap() {
  const app = await NestFactory.create(TimeModule);
  await app.listen(3000);
}
bootstrap();
