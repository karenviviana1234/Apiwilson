import { pool } from "../database/conexion.js";
import {validationResult} from 'express-validator'

export const listarusuarios =async (req,res)=>{
  try {
  

    const result = await pool.query('SELECT * FROM usuarios');
    if (result[0].length>0) {
      return res.status(200).json(result[0]);
    }else{
      res.status(404).json({status:404, message : "Error al listar usuario "+result[0]});
    }

  } catch (error) {
    res.status(500).json({
     message:('error de sistema', +error)
    });
    
  }
}

export const registrarUsuario = async (req,res) => {
  try {
    //rta de validar dato
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({errors});
    }
    const { nombres, direccion ,telefono, correo,rol,password }=req.body
    let sql = 'INSERT into usuarios (nombres, direccion ,telefono, correo,rol,password) VALUES (?,?,?,?,?,?)'
    const [rows] = await pool.query(sql,[nombres, direccion ,telefono, correo,rol,password])
    if (rows.affected > 0) {
      res.status(200).json(result);
    }
    else{
      res.status(404).json({'message': 'registro exitoso '});
    }
  } catch (error) {
    res.status(500).json({'status':500,'message':'error en el sistema: '+error});
  }
}