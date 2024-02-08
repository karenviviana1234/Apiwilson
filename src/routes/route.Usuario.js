import { Router } from "express";
import  { listarusuarios } from '../controller/controller.Usuario.js';

const rutaUsuario = Router();

rutaUsuario.get('/listar', listarusuarios)

export default rutaUsuario;