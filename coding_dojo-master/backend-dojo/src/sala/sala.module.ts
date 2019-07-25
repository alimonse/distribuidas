import { Module } from '@nestjs/common';
import { SalaService } from './sala.service';
import { SalaController } from './sala.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { salaSchema } from './sala.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Sala', schema: salaSchema }]
    )
  ],
  providers: [SalaService],
  controllers: [SalaController],
  exports:[
    SalaService
  ]
})
export class SalaModule {}
