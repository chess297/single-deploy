import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './user.schema';
import { RedisCacheModule } from './redis.module';
import { MysqlModule } from './mysql.module';

@Module({
  imports: [
    MysqlModule,
    RedisCacheModule,
    TypeOrmModule.forFeature([UserSchema]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
