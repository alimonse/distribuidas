import { IoAdapter } from '@nestjs/websockets';
import * as redisIoAdapter from 'socket.io-redis';

const redisAdapter = redisIoAdapter({
  host: 'redis-13288.c85.us-east-1-2.ec2.cloud.redislabs.com', 
  port: 13288,
  password: 'i8JlRN1SICCXOBv8nJaNSNjLzPXshZkT',
});

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: any): any {
    const server = super.createIOServer(port, options);
    server.adapter(redisAdapter);
    return server;
  }
}
