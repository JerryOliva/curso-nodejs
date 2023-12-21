const http = require("http");
const pnts= require('./app.js');

const servidor = http.createServer((req,res)=>
{
    const {method}= req;

    switch (method)
    {
        case 'GET': manejoGET(req,res);
                    break;

        case 'POST': return manejoPost(req,res);

        default:
            console.log(`El método no responde en el servidor: ${method}`);
    }

})

function manejoPost(req,res)
{
    const path = req.url;

    if(path === '/pantalonescompra')
    {
      
        let cuerpo = " ";

        req.on('data', contenido =>{
            cuerpo += contenido.toString();
        });
        
        req.on('end',()=>
        {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            cuerpo=JSON.parse(cuerpo);
            console.log(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.pantalon.precio);
            return res.end("METODO POST EXITOSO");
        });

        

        
    }
}
function manejoGET (req,res)
{
    const path=req.url;
    if(path === "/")
    {
        res.statusCode=200;
        res.end("Bienvenido a LIBRE");
    } else if(path==="/pantalones")
    {
        res.statusCode=200;
        return res.end(JSON.stringify(pnts.pantalones))
    }else if(path==="/pantalones/tallas")
    {
        res.statusCode=200;
        return res.end(JSON.stringify(pnts.pantalones.pantalonesCaballero));
    }
    else 
    {
        res.statusCode=404;
        return res.end("El documento no se encuentra");
    }
    
}

const PUERTO = 3000;

servidor.listen(PUERTO,()=>
{
    console.log(`El puerto escucha en http://localhost:${PUERTO}`);
})
