'use client'

import { useLista } from "@/app/providers/ProvidersLista";
import React from 'react'

export default function ListadoTareas() {

  const { listado, editarLista } = useLista();

  const handleEditar = (tarea: any) => {
    const nuevoEstado = prompt("Escribe el nuevo estado:");

    if (nuevoEstado) {
      editarLista(tarea.id, nuevoEstado);
    }
  };

  return (
    <>
      <h1 className="pt-10 text-3xl pb-2 font-bold">ListadoTareas</h1>

      <table className="w-3xl border-gray-800">
        <thead>
          <tr className="bg-green-800 text-white border-2">
            <th className="border p-2">ID</th>
            <th className="border p-2">Título</th>
            <th className="border p-2">Descripción</th>
            <th className="border p-2">Estado</th>
            <th className="border p-2 px-5">Acción</th>
          </tr>
        </thead>

        <tbody>
          {listado.map((tarea) => (
            <tr key={tarea.id}>
              <td className="border p-2 text-center">{tarea.id}</td>
              <td className="border p-2 text-center">{tarea.titulo}</td>
              <td className="border p-2 text-center">{tarea.descripcion}</td>
              <td className="border p-2 text-center">{tarea.estado}</td>

              <td className="border p-2 text-center">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-md"
                  onClick={() => handleEditar(tarea)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}