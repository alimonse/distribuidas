import { Module } from "@nestjs/common";
import { ClienteGateway } from "../cliente-gateway/cliente.gateway";
import { OperadoraGateway } from "./operadora.gateway";
import { RadioModule } from "radio/radio.module";

@Module({
    imports:[ClienteGateway, OperadoraGateway,RadioModule],
    exports:[OperadoraGateway],
    
})

export class WebSocketModule{}