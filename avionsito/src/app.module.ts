import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RadioEntity } from './radio/radio.entity';
import { RadioModule } from './radio/radio.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '31.220.105.85',
      port: 3306,
      username: 'mantic99_ali',
      password: 'root1234*',
      database: 'mantic99_alimonse',
      entities: [
        RadioEntity,
      ],
      synchronize: true,
      retryDelay: 40000,
      retryAttempts: 3,
      connectTimeout: 40000,
      keepConnectionAlive: true,
      dropSchema: true,
      charset: 'utf8mb4',
      timezone: 'local',
      ssl: false,
    }),
    RadioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
