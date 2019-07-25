import { IsNotEmpty, IsString } from "class-validator";

export class CrearSalaDto {
    @IsNotEmpty()
    @IsString()
    nombre: string

    @IsNotEmpty()
    @IsString()
    numero: number
}