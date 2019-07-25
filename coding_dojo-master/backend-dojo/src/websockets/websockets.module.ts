import { SalaModule } from '../sala/sala.module';
import { RolModule } from '../rol/rol.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { Module } from "@nestjs/common";
import { ClienteGateway } from "./cliente/cliente.gateway";
import { OperadoraGateway } from "./operadora/operadora.gateway";


@Module({
    imports: [UsuarioModule, RolModule, SalaModule],
    providers: [ClienteGateway]
})

export class WebSocketModule { }
