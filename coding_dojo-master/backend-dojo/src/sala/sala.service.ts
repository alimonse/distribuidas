import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CrearSalaDto } from './create-sala-dto/crear-sala.dto';

@Injectable()
export class SalaService {
    constructor(
        @InjectModel('Sala')
        private readonly salaModel: Model<any>
    ) { }

    async create(createSala: CrearSalaDto): Promise<any> {
        const createdCat = new this.salaModel(createSala);
        return await createdCat.save();
    }

    async findAll(): Promise<any[]> {
        return await this.salaModel.find().exec();
    }
}
