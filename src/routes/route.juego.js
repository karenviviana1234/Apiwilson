import { Router } from "express";
import { listarJuego,registrarJuego,cargarImagen } from "../controller/controller.juego.js";
const rutaJuego = Router();

rutaJuego.get('/listarJuego',listarJuego)
rutaJuego.post('/registrarJuego',cargarImagen,registrarJuego)

export default rutaJuego;