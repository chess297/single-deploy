import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './user.schema';
import { ConfigModule } from '@nestjs/config';
import configuration from './config';
import { MysqlModule } from './mysql.module';
import { RedisCacheModule } from './redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MysqlModule,
    RedisCacheModule,
    TypeOrmModule.forFeature([UserSchema]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
