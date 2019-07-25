import { RadioEntity } from './radio.entity';
import { Repository } from 'typeorm';
export declare class RadioService {
    private readonly _radioRepository;
    datosRadioaltimetro: {
        paquete: number[];
    };
    constructor(_radioRepository: Repository<RadioEntity>);
    buscarTodos(): Promise<any[]>;
    crear(max: any, min: any): Promise<RadioEntity>;
}
export declare class radio {
    paqueteDatos: string;
}
