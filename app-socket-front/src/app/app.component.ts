import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-socket-front';

  selectedCategories: string[] = [];

  dataNavInercial: any;
  dataNavRadio: any;
  dataNavGPS: any;

  datosNavInercial = [] = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0];
  datosRadioaltimetro = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
  datosGPS = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

  MAX = 10;
  MIN = 1;

  tiempo;

  constructor() {
    //setTimeout()
    // this.crearRandomicosNavegacionInercial(this.MAX, this.MIN);
    // this.crearRandomicosRadioaltímetro(this.MAX, this.MIN);
    // this.crearRandomicosGPS(this.MAX, this.MIN);
    // this.graficar();

    this.tiempo = setInterval(() => {
      this.crearRandomicosNavegacionInercial(this.MAX, this.MIN);
      this.crearRandomicosRadioaltímetro(this.MAX, this.MIN);
      this.crearRandomicosGPS(this.MAX, this.MIN);
      this.graficar();
    }, 2500)

  }

  crearRandomicosNavegacionInercial(max, min) {
    var paso;
    for (paso = 0; paso < 6; paso++) {
      if (paso < 5) {
        this.datosNavInercial[paso] = Math.round(Math.random() * (max - min) + min);
      }
      else {
        this.datosNavInercial[paso] = Math.round(Math.random() * (max - min) + min)
      }
    };
    console.log(this.datosNavInercial, 'datos')
  }

  crearRandomicosRadioaltímetro(max, min) {
    var paso;
    for (paso = 0; paso < 10; paso++) {
      this.datosRadioaltimetro[paso] = Math.round(Math.random() * (max - min) + min);
    };
    console.log(this.datosRadioaltimetro, 'datos')
  }

  crearRandomicosGPS(max, min) {
    var paso;
    for (paso = 0; paso < 6; paso++) {
      if (paso < 5) {
        this.datosGPS[paso] = Math.round(Math.random() * (max - min) + min);
      }
      else {
        this.datosGPS[paso] = Math.round(Math.random() * (1 - 0) + 0)
      }
    };
    console.log(this.datosGPS, 'datos GPS')
  }
  //  navegación inercial ->  tres datos de tipo entero y tres de tipo real
  // radioaltímetro ->  10 datos de tipo real
  // GPS ->  cinco datos de tipo real y un dato de tipo booleano

  graficar() {
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
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue",
        "Blue"
    ]
    };

  }

}