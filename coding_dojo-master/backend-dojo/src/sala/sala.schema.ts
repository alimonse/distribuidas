import * as mongoose from 'mongoose';
import { usuarioSchema } from 'src/usuario/usuario.schema';

export const salaSchema = new mongoose.Schema({
    nombre: String,
    numero: Number,
    usuario: [usuarioSchema],
});