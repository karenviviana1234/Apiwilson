import express from "express";
import bodyParser from "body-parser";
import rutaUsuario from "./src/routes/route.Usuario.js";
import rutaJuego from "./src/routes/route.juego.js";

const servidor  = express();

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended:false}));


//archivos 
servidor.set('view engine', 'ejs');
servidor.set('views', './views');
//carpeta
servidor.use(express.static('./public'))



//documentacion
servidor.get('/document',(req, res)=>{
  res.render('document.ejs')
})

//servidor 
servidor.use('/usuario',rutaUsuario)
servidor.use('/juegos',rutaJuego)

servidor.listen(4000,() => {
  console.log('Sirve el puerto ')
})
