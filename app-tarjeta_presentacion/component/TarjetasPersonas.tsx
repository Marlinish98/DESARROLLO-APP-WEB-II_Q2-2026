
'use client'
import React from 'react'
import { Personas } from '@/models/personas';
import { useState } from 'react';

export default function TarjetasPersonas () {
     const [listaPersonas, setListaPersonas] = useState<Personas[]>([{
    id: 1,
    nombre: 'Juan',
    ocupacion:"Doctor",
    pais:"Honduras"    
  }]);

  return (
    <div>TarjetasPersonas</div>
  )
}
