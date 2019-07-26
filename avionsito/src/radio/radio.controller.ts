import { Controller, Get, Body, Post } from '@nestjs/common';
import { RadioService } from './radio.service';

@Controller('radio')
export class RadioController {

    datosRadioaltimetro = {
        paquete: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
    };

    tiempo;
    constructor(
        // tslint:disable-next-line: variable-name
        private readonly _radioService: RadioService,
    ) {

        this.tiempo = setInterval(() => {
           this.create()
          }, 1000)

     }

   /*  @Get('crear')
    async create(
    ) {
        this.crearRandomicosRadioaltímetro(5, 8);
        console.log(this.datosRadioaltimetro)
        const radiop = {
            paqueteDatos: JSON.stringify(this.datosRadioaltimetro)
        }
        const radioCrear = await this._radioService.crear(radiop);
        // // tslint:disable-next-line: no-console
        console.log(radioCrear, 'crear');
        return radioCrear;
    }
 */

    @Get('crear')
    async create(
    ) {
        var i=0;
   
            const radioCrear = await this._radioService.crear(1, 100);
        
       
    }

    @Get('r')
    async findAll() {
        
        const todosLosRadios = await this._radioService.buscarTodos();
        return todosLosRadios;
    }

    crearRandomicosRadioaltímetro(max, min) {
        let paso;
        for (paso = 0; paso < 10; paso++) {
            this.datosRadioaltimetro.paquete[paso] = Math.round(Math.random() * (max - min) + min);
        }
        // console.log(this.datosRadioaltimetro, 'datos')
    }

}
