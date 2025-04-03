import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { getDBConfig } from '../config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const dbConfig = getDBConfig();
        // const url = `${dbConfig.username}:${dbConfig.password}@tcp({${dbConfig.type}}:${dbConfig.port})/${dbConfig.database}?charset=utf8mb4&parseTime=True&loc=Local`;
        // console.log('MysqlModule url', url);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 1000);
        });
        return {
          database: dbConfig.database,
          username: dbConfig.username,
          password: dbConfig.password,
          host: dbConfig.host,
          port: dbConfig.port,
          type: 'mysql',
          entities: [User],
          // synchronize: true, // 千万不要用
        };
      },
    }),
  ],
})
export class MysqlModule {}
