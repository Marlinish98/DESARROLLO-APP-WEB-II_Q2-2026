import React from "react";


export default function Conversor(props: temp) {
    let CalculoCentigrados = ((((props.centigrado) * 9) / 5) + 32);
    let CalculoFahrenheit = (((props.Fahrenheit) - 32) * 5 / 9);
    let CalculoKelvin = ((props.centigrado) + 273.15);

    return (
        <div>
            <h1 className="font-bold"> Datos Ingresados </h1>
            <h3>Celsius: {props.centigrado}</h3>
            <h3>Fahrenheit: {props.Fahrenheit}</h3>
            <ul>
                <li> Grados de Celsius → Fahrenheit: {CalculoCentigrados}</li>
                <li> Grados de Fahrenheit → Celsius: {CalculoFahrenheit}</li>
                <li> Grados de Celsius → Kelvin: {CalculoKelvin}</li>
            </ul>
        </div>

    )
}