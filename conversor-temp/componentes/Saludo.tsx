import React from "react";  

export default function Saludo(props:datos){
    return(
        <div className="font-black text-center">
           Hola {props.nombre} {props.apellido}
        </div>
    )
}