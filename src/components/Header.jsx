import React from "react"
import {Java} from "./Java"
import { Go } from "./Go"
import { Home } from "./Home"
import { Python } from "./Python"
import { Ruby } from "./Ruby"

export const Header = () =>{
    return(
        <div>
            <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/Home" className="nav-link px-2 text-secondary">Inicio</a></li>
          <li><a href="/Java" className="nav-link px-2 text-white">Java</a></li>
          <li><a href="/Go" className="nav-link px-2 text-white">Go</a></li>
          <li><a href="/Python" className="nav-link px-2 text-white">Python</a></li>
          <li><a href="/Ruby" className="nav-link px-2 text-white">Ruby</a></li>
          <li><a href="/Carrusel" className="nav-link px-2 text-white">Carrusel</a></li>
          <li><a href="/Formulario" className="nav-link px-2 text-white">Formulario</a></li>
          <li><a href="/Videos" className="nav-link px-2 text-white">Videos</a></li>
          <li><a href="/Creditos" className="nav-link px-2 text-white">Creditos</a></li>
        </ul>

        
        
      </div>
    </div>
  </header>
        </div>


    )
}