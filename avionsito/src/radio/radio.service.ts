import { Injectable } from '@nestjs/common';
import { RadioEntity } from './radio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()

export class RadioService {

    datosRadioaltimetro = {
        paquete: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
    };

    constructor(
        @InjectRepository(RadioEntity)
        private readonly _radioRepository: Repository<RadioEntity>
    ) { }

    async buscarTodos(): Promise<any[]> {
        return await this._radioRepository.find();
    }

    

    async crear(max, min) {
       var i=0;
    
        
        let paso;
        for (paso = 0; paso < 10; paso++) {
            this.datosRadioaltimetro.paquete[paso] = Math.round(Math.random() * (max - min) + min);
        }
        const b = new radio()
        b.paqueteDatos = JSON.stringify(this.datosRadioaltimetro);
        const a = this._radioRepository.create(b);
        return this._radioRepository.save(a);
    
       
        
    }

}

export class radio {
    paqueteDatos: string;
}
