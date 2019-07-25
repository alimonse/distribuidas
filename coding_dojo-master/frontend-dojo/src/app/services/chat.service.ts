import { environment } from './../../environments/environment';

import { Injectable, OnInit } from '@angular/core';
import io from 'socket.io-client'
import { from } from 'rxjs';

@Injectable()
export class ChatService implements OnInit {
    private socketChat = io(environment.socket)

    constructor() { }

    ngOnInit() {

    }



    crearUsuario(usuario) {
        const promesaCrearUsuario = new Promise((resolve) => {
            this.socketChat.emit('crearCliente', usuario, respuesta => {
                resolve(respuesta);
            });
        });
        return from(promesaCrearUsuario);
    }

    crearSala(sala) {
        const promesaSalaUsuario = new Promise((resolve) => {
            this.socketChat.emit('crearCliente', sala, respuesta => {
                resolve(respuesta);
            });
        });
        return from(promesaSalaUsuario);
    }

    enviarMensaje(mensaje) {
        const promesaMensajeUsuario = new Promise((resolve) => {
            this.socketChat.emit('mensajeUsuario', mensaje, respuesta => {
                resolve(respuesta);
            });
        });
        return from(promesaMensajeUsuario);
    }

}