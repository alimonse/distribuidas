import { Controller, Get, Body, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';


@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly _usuarioService: UsuarioService
    ) { }

    @Post()
    async create(
        @Body() usuario,
    ) {
        const usuarioCrear = await this._usuarioService.create(usuario);
        console.log(usuarioCrear, 'crear')
        return usuarioCrear;
    }

    @Get()
    async findAll() {
        const todosLosUsuario = await this._usuarioService.findAll()
        return todosLosUsuario;
    }
}
