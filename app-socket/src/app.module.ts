import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebSocketModule } from 'web-sockets/operadora-escucha-gateway/web-sockets.module';

@Module({
  imports: [WebSocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
