import React from "react"
import  PYTHON from "../images/PYTHON.jpg"
import  JAVA from "../images/JAVA.jpg"
import  GO from "../images/GO.jpg"
import { Footer } from "./Footer"

export const Carrusel = () =>{
    return(
        <div className="container" style={{marginTop:20 , marginBottom:20}}>
            <h1>ESTE ES UN CARRUSEL CON LOS LOGOTIPOS DE ALGUNOS LENGUAJES DE PROGRAMACION</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={PYTHON} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={JAVA} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={GO} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    <Footer/>
        </div>


    )
}