import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { RadioEntity } from './radio.entity';
import { RadioService } from './radio.service';
import { RadioController } from './radio.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([RadioEntity]),
  ],
  providers: [RadioService],
  controllers: [RadioController],
  exports: [
    RadioService,
  ],

})
export class RadioModule { }
