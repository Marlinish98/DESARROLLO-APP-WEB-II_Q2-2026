'use client'
import { createContext } from "react";
import { Lista } from "../modelos/Lista";

export const ContextLista = createContext({
    listado:[] as Lista[],
    agregarLista:(lista:Lista)=>{},
     editarLista: (id: number, estado: string) => {}
})