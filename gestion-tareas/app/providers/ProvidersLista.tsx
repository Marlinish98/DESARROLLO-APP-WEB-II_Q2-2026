'use client'

import React, { useContext, useState } from 'react'
import { View } from "../modelos/View";
import { Lista } from "../modelos/Lista";
import { ContextLista } from '../context/ContextLista';



export default function ProvidersLista(props: View) {

    const [listado,setListado] = useState<Lista[]>([]);
    const [estadoEditado, setEstadoEditado] = useState("");
    const [idEditando, setIdEditando] = useState<number | null>(null);

    function agregarLista(lista:Lista){
        setListado([...listado,lista]);
    }

  function editarLista(id: number, estado: string) {
    setListado(prev =>
        prev.map(item =>
            item.id === id ? { ...item, estado } : item
        )
    );
}
  return (
  
   <>
   <ContextLista.Provider value={{ listado, agregarLista, editarLista}}>
        {props.children}
        </ContextLista.Provider>
        </>
  )
}   

  export function useLista(){
    return useContext(ContextLista)
  }

