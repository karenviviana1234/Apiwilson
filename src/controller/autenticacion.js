import {pool} from "../database/conexion.js";
import jwt from "jsonwebtoken";

export const validarUsu = async(req,res) =>{
  try {
    let{correo,password}=req.body
    let sql=`select id_usuario,nombres,rol FROM usuarios where correo='${correo}' and password='${password}'`;
    const [rows]=await pool.query(sql)

    if (rows.length>0){ 
      const token = jwt.sign({rows}, process.env.AUT_SECRET, 
        {expiresIn: process.env.AUT_EXPIRE});
      return res.status(200).json({"message":'usuario autorizado', data:rows, token:token});}
    else{
      return res.status(404).json({"message":'usuario no autorizado'});
    }
}
catch (error) {
  res.status(500).json({
   message:('error de sistema', +error)
  });
}}


export const validarToken = async(req,res, next) =>{
  try {
    let token_cliente = req.headers['token'];

    if(!token_cliente){
      return res.status(404).json({"message":'token es requerido'});
    }else{
      const token = jwt.verify(token_cliente, process.env.AUT_SECRET, (error, decoded)=>{
        if(error){
          return res.status(404).json({"message":'token incorrecto'});
        }else {
          next();
        }
      });
    }
}
catch (error) {
  res.status(500).json({
   message:('error de sistema', +error)
  });
}}
