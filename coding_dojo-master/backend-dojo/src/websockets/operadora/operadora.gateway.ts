import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    WsResponse,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'http';
const io = require('socket.io-client');

@WebSocketGateway(3002)

export class OperadoraGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    afterInit(server: any) {
        console.log('Init Operadora-escucha');
    }

    handleConnection(client: any, ...args: any[]) {
        console.log('Operadora -> conexion de cliente', client.id, args);
    }

    handleDisconnect(client: any) {
        console.log('disconnect', client.id);
    }

    @WebSocketServer() server;
	
    socket = io('http://localhost:3002/chat');


}
