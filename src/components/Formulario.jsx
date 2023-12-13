import React from 'react'
import { Footer } from './Footer'

export const Formulario = () => {
  return (
    <div className='container'style={{marginTop:100,height:"50%" ,width:"50%"}} >
        <div>
        <center style={{backgroundColor:'black',color:'aqua'}}>
        <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
    </div>
    <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Pais</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
    </div>


            <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Correo electronico</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="(Ejemplo) name@gmail.com"/>
    </div>
    <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Para usted cual es el mejor leguaje para iniciar en la programacion.</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='comente aqui......'></textarea>
    </div>



        </center>
        </div>
        <button type="button" className="btn btn-primary">Enviar</button>

        


        <Footer/>
    </div>
 
 
 
 )
}
