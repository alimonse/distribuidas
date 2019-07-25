import { RadioService } from './radio.service';
export declare class RadioController {
    private readonly _radioService;
    datosRadioaltimetro: {
        paquete: number[];
    };
    constructor(_radioService: RadioService);
    create(): Promise<import("./radio.entity").RadioEntity>;
    findAll(): Promise<any[]>;
    crearRandomicosRadioaltímetro(max: any, min: any): void;
}
