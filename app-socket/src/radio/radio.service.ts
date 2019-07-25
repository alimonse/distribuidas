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
        private readonly _radioRepository: Repository<RadioEntity>) { }

    buscarTodos(): Promise<RadioEntity[]> {
        return this._radioRepository.find();
    }

    async crear(max,min): Promise<RadioEntity> {

        let paso;
        for (paso = 0; paso < 10; paso++) {
            this.datosRadioaltimetro.paquete[paso] = Math.round(Math.random() * (max - min) + min);
        }

        const radiop = {
            paqueteDatos: JSON.stringify(this.datosRadioaltimetro),
        };
        return this._radioRepository.save(radiop);
    }

}

export interface radio {
    paqueteDatos: string;
}
