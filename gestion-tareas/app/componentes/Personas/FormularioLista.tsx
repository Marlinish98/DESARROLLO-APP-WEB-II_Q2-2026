'use client'

import { Lista } from "@/app/modelos/Lista";
import { useLista } from "../../providers/ProvidersLista";
import React, { useEffect, useState } from 'react';

export default function FormularioLista() {

    const { listado, agregarLista, editarLista } = useLista();

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [estado, setEstado] = useState('');


    function agregar() {
        let lista: Lista = {
            id: listado.length + 1,
            titulo,
            descripcion,
            estado
        };

        agregarLista(lista);

        setTitulo('');
        setDescripcion('');
        setEstado('');

        alert('Item agregado exitosamente');
    }

    useEffect(() => {
        console.log(listado);
    }, [listado]);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border">

            <h1 className="text-2xl font-bold text-center mb-6">
                To Do List
            </h1>

            <form className="flex flex-col gap-4">

                <input
                    placeholder="Titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <input
                    placeholder="Descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <input
                    placeholder="Estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                />

            </form>
<button
  type="button"
  className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
  onClick={agregar}
>
  Agregar Tarea
</button>

        </div>
    );
}