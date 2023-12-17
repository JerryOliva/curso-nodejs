import {sumar,restar,multiplicar,dividir} from './operacion.js';

let checkUp =()=>
{
    let r1
    let r2
    let r3
    let r4
    document.querySelector("#operar").addEventListener("click",()=>
    {
        let v1=document.getElementById('v1');
        let v2=document.getElementById('v2');
        
        r1 = sumar(parseInt(v1.value),parseInt(v2.value));
        r2 = restar(parseInt(v1.value), parseInt(v2.value));
        r3 = multiplicar(parseInt(v1.value), parseInt(v2.value));
        r4 = dividir(parseInt(v1.value),parseInt(v2.value));
        v1.innerText=" ";
        v2.innerText=" ";
        console.log(
            `la suma de los valores es ${r1}`)
        console.log( `La resta de los valores es ${r2}`)
        console.log(`La multiplicación de los valores es ${r3}`) 
        console.log(`La división de los valores es ${r4}`);
        
        
      
    }) 
    
}

export {checkUp};
