
function saludar(saludo)
{
    console.log(saludo);
}

let camarada=(frase)=>
{
    console.log(frase)
}

function rimas(rima)
{
    console.log(rima);
}

let lorem=(lor)=>
{
    console.log(lor)
}

module.exports = {

    rimas: rimas,
    lorem: lorem
};


module.exports.saludar = saludar;
module.exports.camarada = camarada;
