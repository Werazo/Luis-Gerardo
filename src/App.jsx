import React from 'react';
import Meteoro from './assets/Img/meteor-solid.svg';
import './Style.css';
import Hero from './Components/Hero';
import SobreMi from './Components/SobreMi';
import Experiencia from './Components/Experiencia';
import Portafolio from './Components/Portafolio';
import Contacto from './Components/Contacto';
import Pie from './Components/Pie';

function App() {

  return (
    <>
      <div>
        {/*NavBar*/}
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-toggler">

              <a className="navbar-brand" href="#">
                <img src={Meteoro} width="50" alt="Logo Pagina web"/>
              </a>

              <ul className="navbar-nav d-flex justify-content-center align-items-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#Sobre-mi">Sobre mi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Proyectos">Proyectos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contacto"> Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/*Hero*/}
        <Hero/>

        {/*Sobre mi*/}
        <SobreMi id='/Sobre-mi'/>
        
        {/*Experiencia*/}
        <Experiencia/>

        {/*Portafolio*/}
        <Portafolio id='/Proyecto'/>

        {/*Contacto*/}
        <Contacto id='/Contacto'/>

        {/*Pie de Pagina*/}
        <Pie/>

      </div>
    </>
  )
}

export default App
