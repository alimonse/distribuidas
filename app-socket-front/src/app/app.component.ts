import { Component } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-socket-front';

  isShown: boolean = false;

  selectedNavInercial: boolean = true;
  selectedRadioAltimetro: boolean = true;
  selectedGPS: boolean = true;

  dataNavInercial: any;
  dataNavRadio: any;
  dataNavGPS: any;

  datosNavInercial = [] = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
  datosRadioaltimetro = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
  datosGPS = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

  MAX = 10;
  MIN = 1;

  tiempo;

  val: number = 1000;

  paquetasoAli = []
  constructor(
    private readonly _service: Service
  ) {
    this.tiempo = setInterval(() => {
      this.obternerDatosRadio()
      this.graficar();
    }, this.val)

  }


  obternerDatosRadio() {

    this._service.buscarTodos().subscribe((resp: any[]) => {
      resp.forEach((valor: any) => {
        // console.log((JSON.parse(valor.paqueteDatos)));
        this.paquetasoAli.push((JSON.parse(valor.paqueteDatos)).paquete)
      })
      // console.log('JSON.stringify(this.datosRadioaltimetro)', resp)
    })
  }



  graficar() {


    this.paquetasoAli.forEach(valor => {
      //console.log(valor,'esto es valor forEach')
      this.datosNavInercial = valor;
      this.datosRadioaltimetro = valor;
      this.datosGPS = valor;
    })
      //console.log(this.paquetasoAli,  'PAQUETASO ALI')

      this.dataNavInercial = {
        labels: ['Punto 1', 'Punto 2', 'Punto 3', 'Punto 4', 'Punto 5', 'Punto 6'],
        datasets: [
          {
            label: 'Datos Navegación Inercial',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: this.datosNavInercial
          }
        ]
      }

      this.dataNavRadio = {
        labels: ['Punto 1', 'Punto 2', 'Punto 3', 'Punto 4', 'Punto 5', 'Punto 6', 'Punto 7', 'Punto 8', 'Punto 9', 'Punto 10'],
        datasets: [
          {
            label: 'Radioaltimetro',
            data: this.datosRadioaltimetro,
            fill: false,
            borderColor: '#4bc0c0'
          }
        ]
      };

      this.dataNavGPS = {
        datasets: [{
          data: this.datosGPS,
          backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB",
            "#36A2EB"
          ],
          label: 'GPS'
        }],
        labels: [
          "Punto 1",
          "Punto 2",
          "Punto 3",
          "Punto 4",
          "Punto 5",
          "Punto 6"
        ]
      };

    }

    mostrarNavInercial($event: Event) {
      this.selectedNavInercial != this.selectedNavInercial //create new data
    }
    
    mostrarRadioAltimetro($event: Event) {
      this.selectedRadioAltimetro != this.selectedNavInercial //create new data
      // console.log(this.selectedNavInercial, 'que imprime')
    }
    
    mostrarGPS($event: Event) {
      this.selectedGPS != this.selectedNavInercial //create new data
      // console.log(this.selectedNavInercial, 'que imprime')
    }
    
    mostrar(){
      clearInterval(this.tiempo);
      this.tiempo = setInterval(() => {
        this.obternerDatosRadio()
        this.graficar();
      }, this.val)
    }

}