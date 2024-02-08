import express from "express";
import bodyParser from "body-parser";
import rutaUsuario from "./src/routes/route.Usuario.js";
import path from "path";

const servidor  = express();

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended:false}));


//archivos 
servidor.set('view engine', 'ejs');
servidor.set('views', './views');
servidor.use(express.static('./public'))



//documentacion
servidor.get('/document',(req, res)=>{
  res.render('document.ejs')
})

//servidor 
servidor.use('/usuario',rutaUsuario)

servidor.listen(5000,() => {
  console.log('Sirve el puerto 4000')
})
