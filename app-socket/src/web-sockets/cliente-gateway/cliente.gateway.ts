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
import { RadioService } from 'radio/radio.service';
const io = require('socket.io-client');

@WebSocketGateway(3002)
export class ClienteGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{

	constructor(
		private readonly _radioService : RadioService,
  ){}

    afterInit(server: any) {
		console.log('Init Cliente');
	}
	handleConnection(client: any, ...args: any[]) {
		console.log('Usuario: conexion de cliente', client.id, args);
	}
	handleDisconnect(client: any) {
		console.log('disconnect', client.id);
	}

	@SubscribeMessage('peticionUsuarioCliente')
	holaUsuario(client, data): Observable<WsResponse<number>> {
		console.log('Entro a cliente gateway',client.id);
		client.broadcast.emit('respuestaUsuario',data)
		console.log('Esto es dataaaaa: ',data , client.id)
		return data; // la peticion
	}

	@SubscribeMessage('guardarRadio') //nombre del evento
    radioGenerado(client, data): Observable<any> {
        console.log('Entro a cliente gateway', client.id);
				    this._radioService.crear(5, 8);
			  /* .then(respuesta => {
                // tslint:disable-next-line: no-console
                console.log('se creo', respuesta);
						}); */
						
				
       // client.broadcast.emit('respuestaUsuario', data)
        return data; // la peticion 
    }

	}