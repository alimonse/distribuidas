import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroFormulario: FormGroup
  habilitarButon = false;
  usuarioACrear: any

  constructor(
    private readonly _chatService: ChatService,
    private readonly _formBuider: FormBuilder,
    private readonly _router:Router
  ) { }

  ngOnInit() {
    this.estructuraRegistroFormulario()
  }

  estructuraRegistroFormulario() {
    this.registroFormulario = this._formBuider.group({
      nombre: ['', []],
      nickName: ['', []],
      edad: ['', []],
      password: ['', []]
    })
  }

  registro() {
    const usuario = this.registroFormulario.value;
    this._chatService
      .crearUsuario(usuario)
      .subscribe(
        respuesta => {
          console.log(respuesta);
          this._router.navigate(['/crear-sala'])
        }
      );
  }

}
