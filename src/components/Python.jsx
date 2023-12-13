import React from "react"
import { Footer } from "./Footer"
import PYTHON from "../images/PYTHON.jpg"

export const Python = () =>{
    return(
        <div className="container">
            <center>
            <h1>¿QUE ES PYTHON?</h1>
            <h3>Python es un lenguaje de programación de alto nivel, interpretado, de propósito general y con una sintaxis sencilla y legible. Fue creado por Guido van Rossum y su primera versión fue lanzada en 1991. Desde entonces, Python ha crecido en popularidad y se ha convertido en uno de los lenguajes de programación más utilizados en el mundo.</h3>
            <img src={PYTHON} className="d-block w-50" alt="" />
            </center>
            <Footer/>
    
        </div>


    )
}