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
import { UsuarioService } from 'src/usuario/usuario.service';
import { SalaService } from 'src/sala/sala.service';
import { RolService } from 'src/rol/rol.service';
const io = require('socket.io-client');


@WebSocketGateway(3002, { namespace: '/chat' })

export class ClienteGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    constructor(
        private readonly _usuarioService: UsuarioService,
        private readonly _salaService: SalaService,
        private readonly _rolService: RolService
    ) { }

    afterInit(server: any) {
        console.log('Init cliente');
    }

    handleConnection(client: any, ...args: any[]) {
        console.log('cliente -> conexion de aperadora', client.id, args);
    }

    handleDisconnect(client: any) {
        console.log('disconnect', client.id);
    }

    
    @SubscribeMessage('crearCliente') //nombre del evento
    crearCliente(client, data): Observable<any> {
        console.log('Entro a cliente gateway', client.id);
        this._usuarioService
            .create(data)
            .then(respuesta => {
                console.log('se creo', respuesta);
            });
        client.broadcast.emit('respuestaUsuario', data)
        return data; // la peticion 
    }

    @SubscribeMessage('crearSala') //nombre del evento
    crearSala(client, data): Observable<any> {
        console.log('Entro a cliente gateway', client.id);
        client.broadcast.
        this._salaService
            .create(data)
            .then(respuesta => {
                console.log('se creo', respuesta);                
            });        
        return data; // la peticion 
    }

    @SubscribeMessage('mensajeUsuario') //nombre del evento
    buscarUsuario(client, data): Observable<WsResponse<number>> {
        console.log('Entro a cliente gateway', client.id);
        client.id = data
        console.log('mensaje', client.id)
        client.broadcast.emit('enviarMensaje', data)
        return data; // la peticion 
    }

    @SubscribeMessage('mensajeUsuario') //nombre del evento
    mensajeUsuario(client, data): Observable<WsResponse<number>> {
        console.log('Entro a cliente gateway', client.id);
        client.id = data
        console.log('mensaje', client.id)
        client.broadcast.emit('enviarMensaje', data)
        return data; // la peticion 
    }
}
