import React from 'react'
import Credi from "../images/Credi.jpeg"
import { Footer } from './Footer'
export const Creditos = () => {
  return (
    <div>
        <center>
            <h1>Creditos</h1>
            <h3>Desarrollado por:</h3>
            <h3>Carlos Angel Cespedes Uruchi</h3>
            <h3>CI: 8312631 LP.</h3>

            <img src={Credi} className="d-block w-50" alt="" />
            
        </center>
        <Footer/>
        <h1></h1>
    </div>
  )
}
