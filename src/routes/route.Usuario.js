import { Router } from "express";
import {validarusuario} from '../validate/usuario.js'
import  { listarusuarios, registrarUsuario,validarusuario } from '../controller/controller.Usuario.js';

const rutaUsuario = Router();

rutaUsuario.get('/listar',listarusuarios)

//validando dato
rutaUsuario.post('/registrar',validarusuario,registrarUsuario)

export default rutaUsuario;