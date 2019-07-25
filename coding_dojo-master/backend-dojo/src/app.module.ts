import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { SalaModule } from './sala/sala.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WebSocketModule } from './websockets/websockets.module';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
        host: '31.220.105.85',
        port: 3306,
        username: 'mantic99_admin',
        password: 'root1234#',
        database: 'mantic99_alimonse',
        entities: [],
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
    WebSocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


