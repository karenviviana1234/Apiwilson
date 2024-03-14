import { pool } from "../database/conexion.js";
import multer from "multer";

const storage = multer.diskStorage(
  {
    destination:function(req,img,cb){
      cb(null,"public/img")
    },
    filename:function(req,img,cb){
      cb(null,img.originalname);
    }
  }
);

const upload = multer({storage:storage});
export const cargarImagen =upload.single('img')


export const listarJuego =async (req,res)=>{
  try {
    const result = await pool.query('SELECT * FROM juegos');
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

export const registrarJuego = async (req,res) => {
  try {
    
    let { nombre, descripcion ,precio }=req.body
    let imagen = req.file.name
    let sql= `INSERT INTO juegos(nombre, descripcion, precio,imagen) VALUES ('${nombre}', '${descripcion}', '${imagen}', ${precio})`    
    const [rows] = await pool.query(sql)
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