import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private socketChat = io(environment.socket);
  mensajes: any

  constructor(
    private readonly _chatService: ChatService
  ) { }

  ngOnInit() {
    this.socketChat.on('enviarMensaje', (data) => {
      this.mensajes = data;
      console.log(data.nick + ': ' + data.mensaje);
    });
  }

  enviarMensaje(mensaje) {
    this._chatService
      .enviarMensaje(mensaje)
      .subscribe(respuesta => {
        console.log(respuesta)
      })
  }

}
