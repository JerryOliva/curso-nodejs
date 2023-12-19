const fs = require('fs');

let archivo = fs.readFileSync( 'index.html', 'UTF-8',( error)=>
    {
        if(error)
    {
      throw(error);
    }
        })
    console.log(archivo);

fs.renameSync("index.html", "main.html",( error )=>
{
    if(error)
    {
         throw(error);
    }
    else
    {
        console.log("Función concretada");
    }
})

fs.appendFileSync("main.html","<h1>La interrogante dejo de importar hace mucho tiempo, ahora, es vivir</h1>", (er)=>
{
    if(er)
    {
        throw er;
    }else 
    {
        console.log("Elemento incrustado");
    }
})

fs.writeFileSync("main.html", "Somos jedis realmente" ,(e)=>
    {
        if(e)
        {
            throw e;
        }
        console.log("Cambio realizado");
    })

fs.unlinkSync("main.html" , (e)=>
{
    if(e)
    {
        throw(e);
    }
    console.log("Eliminado");
})