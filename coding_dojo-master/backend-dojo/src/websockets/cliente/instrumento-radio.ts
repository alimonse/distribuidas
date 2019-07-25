import {
	WebSocketGateway,
	SubscribeMessage,
	WsResponse,
	OnGatewayInit,
	OnGatewayConnection,
	OnGatewayDisconnect
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const io = require('socket.io-client');

@WebSocketGateway(3002)
export class InstrumentosRadio implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{

    afterInit(server: any) {
        console.log('Init Cliente');
    }
    handleConnection(client: any, ...args: any[]) {
	    console.log('Usuario: conexion de cliente', client.id, args);
	}
	handleDisconnect(client: any) {
		console.log('disconnect', client.id);
	}
	
	@SubscribeMessage('peticionUsuarioRadio')
	holaRadio(client, data): Observable<WsResponse<number>> {
		console.log('Entro a cliente radio',client.id);
		client.broadcast.emit('respuestaRadio',data)
		console.log('Esto es radio: ',data , client.id)
		return data; // la peticion
	}

	

}