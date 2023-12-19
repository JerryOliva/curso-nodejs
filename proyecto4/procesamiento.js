let ordenarProducto = (product)=>
{
    return new Promise ((resolve,reject)=>
    {
        console.log("Bienvenido a Libre");
        console.log("Espera un momento");
        console.log(`Producto: ${product}`);
    setTimeout(()=>
    {
        if(product === "pantalón camo")
        {
            resolve(`Tu producto ${product} esta siendo procesado`);
        }
        else 
        {
            reject(`404 not found / No disponible`);
        }
    })
    },2000)
        
    

}
function procesarProducto (respuesta)
{
    return new Promise( (resolve)=>
    {
        console.log("Procesando orden");
        console.log(`${respuesta}`);
        setTimeout(()=>
        {
            resolve("Gracias por tu compra nos encanta que seas libre");
        },4000)
    })
}

ordenarProducto("pantalón amo")
    .then(respuesta=> {
        console.log(respuesta);
        return procesarProducto(respuesta);
    })
    .then(proceso=>
        {
            console.log(proceso);
         })
    .catch(error=>
        {
            console.log(error);
        })

