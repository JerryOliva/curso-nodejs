import { almacenajeUsuario } from "./almacen.js";


let formData=()=>
{
    document.querySelector("#entrada").addEventListener("click",(evento)=>
{
    evento.preventDefault();
    nombre= document.querySelector("#nombre");
    email=document.getElementById("email");
    escuela1=document.getElementById("escuela1");
    escuela2=document.getElementById("escuela2");
    escuela3=document.getElementById("escuela3");

    let user=
    {
        nombre:nombre.value,
        email: email.value,
        escuelas:
        {
            escuela1: escuela1.value,
            escuela2: escuela2.value,
            escuela3: escuela3.value
        }
    }
    almacenajeUsuario(user);

    console.log(user);
    
})
}



export {formData};



