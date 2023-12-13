import React from 'react'
import  logo from "../images/logo.png";
export const ContenidoHome = () => {
    const sectionStyle = {
        backgroundColor: 'black',
        color: 'white',  // Cambia el color del texto según sea necesario
        padding: '20px',
      };
  return (
    <div className="container">
        <section style={sectionStyle}>
            <center>
            <h1>¿QUE ES UN LENGUAJE DE PROGRAMACION?</h1>
            <h3>Un lenguaje de programación es un lenguaje formal o artificial, compuesto por símbolos, que, por medio de ciertas instrucciones, permite a un programador dar órdenes o establecer acciones consecutivas y algoritmos que servirán para crear programas que controlen el comportamiento físico y lógico de una máquina.</h3>

            <div className='col-4'>
            <img src={logo} className="d-block w-100" alt="no"/>

            </div>
            </center>
        </section>




    </div>
  )
}
