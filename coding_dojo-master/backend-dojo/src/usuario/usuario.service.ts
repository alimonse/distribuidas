import { CrearUsuarioDto } from './create-usuario-dto/crear-usuario.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectModel('Usuario')
        private readonly catModel: Model<any>
    ) { }

    async create(createUsuario: CrearUsuarioDto): Promise<any> {
        const createdCat = new this.catModel(createUsuario);
        return await createdCat.save();
    }

    async findAll(): Promise<any[]> {
        return await this.catModel.find().exec();
    }
}
