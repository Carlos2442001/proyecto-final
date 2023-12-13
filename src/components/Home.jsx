import React from 'react'
import { Footer } from './Footer';
import { ContenidoHome } from './ContenidoHome';
//siempre poner en el primer dic className container para que funcione el direccionamiento
export const Home = () => {
  return (
    <div>
        <ContenidoHome/>
        <Footer/>
    </div>
  )
}
