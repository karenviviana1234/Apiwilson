import { pool } from "../database/conexion.js";

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