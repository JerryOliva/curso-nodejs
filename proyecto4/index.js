let esPedido = ()=>
{
    return Math.random()<0.5;
}

const pedidoEsfood= new Promise ( (resolve, reject)=>
{
    if(esPedido())
    {
        resolve("Pedido Recibido");
    }
    else 
    {
        reject("Pedido Rechazado");
    }

})

// funciones que reciben las funciones del objeto promesa.
let manReci=(res)=>
{
    console.log(res);
}
let manRech=(rej)=>
{
    console.log(rej);
}

// Iteración de la promesa y la validación del condicional.
for(let i=0; i<10; i++)
{
    pedidoEsfood.then(manReci,manRech);
}

console.log("DEspues de bucle");

// Sintaxis concisa: Recibir las funciones de la promesa en las funciones internas del método .then y .catchgit
// Method chainning = Cadena de métodos.

pedidoEsfood
    .then((confirma)=>
    {
        console.log(confirma);
    })
    .catch((rechazo)=>
    {
        console.log(rechazo);
    })