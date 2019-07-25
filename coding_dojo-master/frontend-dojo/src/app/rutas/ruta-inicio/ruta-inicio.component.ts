import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.css']
})
export class RutaInicioComponent implements OnInit {

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  irARegistro() {
    this._router.navigate(['/registro'])
  }
  irAIngreso() {
    this._router.navigate(['/ingreso'])
  }

}
