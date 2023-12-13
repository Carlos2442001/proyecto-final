import React from "react"
import { Footer } from "./Footer"
import GO from "../images/GO.jpg"

export const Go = () =>{
    return(
        <div className="container">
            <center>
                <h1>¿QUE ES GO?</h1>
                <img src={GO} alt="" />
                <h2>"Go", también conocido como "Golang", es un lenguaje de programación de código abierto desarrollado por Google. Fue creado por Robert Griesemer, Rob Pike y Ken Thompson, y se anunció por primera vez en 2009. Go está diseñado para ser eficiente, conciso, y fácil de leer y mantener, con un enfoque particular en la simplicidad y la productividad.</h2>

            </center>

            <Footer/>
    
        </div>


    )
}