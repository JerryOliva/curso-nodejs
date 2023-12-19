const eventEmmiter = require ("events");

const evento =  new eventEmmiter();

evento.on( "compra", (total , articulos)=>
{
    console.log(`El total de la compra es: $${total}`);
    console.log(`El numero de artículos son: ${articulos}`);
})

evento.emit("compra",493,3);


