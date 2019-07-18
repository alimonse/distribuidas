import { Module } from "@nestjs/common";
import { ClienteGateway } from "../cliente-gateway/cliente.gateway";
import { OperadoraGateway } from "./operadora.gateway";
import { InstrumentosRadio } from "web-sockets/cliente-gateway/instrumento-radio";

@Module({
    imports:[ClienteGateway, OperadoraGateway, InstrumentosRadio],
    exports:[OperadoraGateway],
    
})

export class WebSocketModule{}