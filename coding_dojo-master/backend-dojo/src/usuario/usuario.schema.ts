import * as mongoose from 'mongoose';
import { salaSchema } from 'src/sala/sala.schema';
import { rolSchema } from 'src/rol/rol.schema';

export const usuarioSchema = new mongoose.Schema({
    nombre: String,
    nickName: String,
    edad: Number,
    password: String,
    // salas: [salaSchema],
    // roles: [rolSchema]
});