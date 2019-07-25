import * as mongoose from 'mongoose';
import { usuarioSchema } from 'src/usuario/usuario.schema';

export const rolSchema = new mongoose.Schema({
    nombre: String,
    usuario: [usuarioSchema],
});