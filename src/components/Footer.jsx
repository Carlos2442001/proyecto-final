import React from "react"

export const Footer = () =>{
    return(
        <div>
            <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
      </a>
      <p className="text-body-secondary">&copy; 2023</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Todos los derechos reservados....</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">2023</a></li>
        
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Carlos Angel Cespedes Urchi</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Angelito DeV....</a></li>
       
      </ul>
    </div>

    <div className="col mb-3">
      <h5>8312631 LP.</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"></a></li>
        
      </ul>
    </div>
  </footer>
</div>
    
        </div>


    )
}