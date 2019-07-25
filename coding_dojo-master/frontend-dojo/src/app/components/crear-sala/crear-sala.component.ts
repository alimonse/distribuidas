import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.css']
})
export class CrearSalaComponent implements OnInit {

  constructor(
    private readonly _chatService: ChatService
  ) { }

  ngOnInit() {
  }

  crearSala(nombre, numero) {

    const sala = {
      nombre,
      numero: parseInt(numero)
    }
    this._chatService
      .crearSala(sala)
      .subscribe(
        respuest => {
          console.log(respuest)
        }
      )
  }

}
