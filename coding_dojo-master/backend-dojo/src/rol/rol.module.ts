import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { rolSchema } from './rol.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Rol', schema: rolSchema }]
    )
  ],
  providers: [RolService],
  controllers: [RolController],
  exports: [
    RolService
  ]
})
export class RolModule { }
