import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';
import 'dotenv/config';

async function bootstrap() {
  const c = config();
  console.log('process.env', c);

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
