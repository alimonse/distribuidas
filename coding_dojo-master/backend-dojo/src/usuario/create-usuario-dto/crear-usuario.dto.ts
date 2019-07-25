import { IsNotEmpty, IsString, IsInt } from "class-validator";

export class CrearUsuarioDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    nickName: string;

    @IsNotEmpty()
    @IsInt()
    edad: number;

    @IsNotEmpty()
    @IsString()
    password: string;
}