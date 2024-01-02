import React from 'react';
import LogoPortafolio from '../assets/Img/meteor-solid-BLANCO.svg'

const Pie = () => {
    return ( 
        <>
        <footer className="seccion_obscura d-flex flex-column align-items-center justify-content-center">
          <img className="footer-icono" src={LogoPortafolio} alt="Logo-Portafolio"/>
          <p className="footer-texto text-center">
            Luis Gerardo, AKA: El Wero.
            <br/>
            Hagamos un proyecto junstos.
          </p>

          <div className="iconos-redes d-flex align-items-center justify-content-center">
            <a className="RedSocial align-items-center" href="https://github.com/Werazo" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a className="RedSocial align-items-center" href="https://www.linkedin.com/in/luis-gerardo-marin-113462255/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

          <div className="autor">Lui Gerardo Marin &#169;</div>
        </footer>
        </>
     );
}
 
export default Pie;