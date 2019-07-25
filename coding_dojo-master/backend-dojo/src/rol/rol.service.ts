import { CrearRolDto } from './create-rol-dto/crear-rol.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

@Injectable()
export class RolService {
    constructor(
        @InjectModel('Rol')
        private readonly rolModel: Model<any>
    ) { }

    async create(createRol: CrearRolDto): Promise<any> {
        const createdCat = new this.rolModel(createRol);
        return await createdCat.save();
    }

    async findAll(): Promise<any[]> {
        return await this.rolModel.find().exec();
    }
}
