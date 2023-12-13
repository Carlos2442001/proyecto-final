import React from 'react'
import ReactPlayer from 'react-player';
import { Footer } from './Footer';

export const Videos = () => {
  return (
    <div>
        <h1>Aprende python</h1>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/nKPbfIU442g" title="Curso de PYTHON desde CERO (Completo)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h1>Aprende java</h1>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/L1oMLsiMusQ?list=PLyvsggKtwbLX9LrDnl1-K6QtYo7m0yXWB" title="Curso Java desde cero  #1 | Introducción e instalación de JDK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Footer/>

    </div>
  )
}
