import { CrearSalaComponent } from './components/crear-sala/crear-sala.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {
    path: 'ingreso',
    component: IngresoComponent
  },
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: 'crear-sala',
    component: CrearSalaComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'no-encontrada',
    component: RutaNoEncontradaComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'no-encontrada',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
