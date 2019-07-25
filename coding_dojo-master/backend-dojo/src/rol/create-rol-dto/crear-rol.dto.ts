import { IsNotEmpty, IsString } from 'class-validator'
export class CrearRolDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;
}