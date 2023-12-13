import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';

import Alert from 'bootstrap/js/dist/alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';

import { Error } from './components/Error';
import { Java } from './components/Java';
import { Go } from './components/Go';
import { Ruby } from './components/Ruby';
import { Python } from './components/Python';
import { Carrusel } from './components/Carrusel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Formulario } from './components/Formulario';
import { Videos } from './components/Videos';
import { Creditos } from './components/Creditos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='Home' element={<Home/>}/>
        <Route exact path='Java' element={<Java/>}/>
        <Route exact path='Go' element={<Go/>}/>
        <Route exact path='Ruby' element={<Ruby/>}/>
        <Route exact path='Python' element={<Python/>}/>
        <Route exact path='Carrusel' element={<Carrusel/>}/>
        <Route exact path='Formulario' element={<Formulario/>}/>
        <Route exact path='Videos' element={<Videos/>}/>
        <Route exact path='Creditos' element={<Creditos/>}/>
        <Route exact path='*' element={<Error/>}/>
      </Routes>

      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
