import React from "react"
import { Footer } from "./Footer"
import RUBY from "../images/RUBY.jpg"

export const Ruby = () =>{
    return(
        <div className="container">
            <center>
            <h1>¿QUE ES RUBY?</h1>
            <h3>Ruby es un lenguaje de programación de alto nivel, dinámico, interpretado y orientado a objetos. Fue creado por Yukihiro "Matz" Matsumoto en Japón y lanzado por primera vez en 1995. Ruby se destaca por su simplicidad y elegancia, y está diseñado para ser fácil de leer y escribir.</h3>
            <img src={RUBY} className="d-block w-50" alt="" />
            </center>
            
            <Footer/>
    
        </div>


    )
}