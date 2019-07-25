import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarioSchema } from './usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Usuario', schema: usuarioSchema }]
    )
  ],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports:[
    UsuarioService
  ]
})
export class UsuarioModule { }
