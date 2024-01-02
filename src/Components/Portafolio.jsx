import React from 'react';
import Fratello from '../assets/Img/fratello.png'
import Tacos from '../assets/Img/Tacos.jpg'
import Contar from '../assets/Img/Contar.jpg'

const Portafolio = () => {
    return ( 
        <>
            <section id="Proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
                <h2 className="seccion_titulo texto-negro">Proyectos recientes</h2>
                <h3 className="seccion-descripcion">Estos son mis propyectos mas recientes</h3>

                {/*Galeria de proyectos*/}
                <div className="container text-center proyectos-contenedor">
                    <div className="row">

                        <div className="col-12 col-md-4"> {/*Fratello*/}
                        <div className="proyecto">

                            <img src={Fratello} alt="fratello"/>

                            <div className="overlay">
                            <p>Fratello</p>

                            <div className="iconos-contenedor">
                                <a href="https://github.com/Werazo/Fratello_Caff-" target="_blank">
                                <i className="bi bi-github"></i>
                                </a>
                                <a href="https://fratello-91e12.firebaseapp.com/" target="_blank">
                                <i className="bi bi-cup-hot"></i>
                                </a>
                            </div>
                            </div>

                        </div>
                        </div>

                        <div className="col-12 col-md-4"> {/*Las 3 T´s*/}
                            <div className="proyecto">

                                <img src={Tacos} alt="Las 3 T´s"/>

                                <div className="overlay">
                                    <p>Las 3 T´s</p>

                                    <div className="iconos-contenedor">
                                        <a href="https://github.com/Werazo/3-T-s" target="_blank">
                                        <i className="bi bi-github"></i>
                                        </a>
                                        <a href="https://tres-t.web.app/" target="_blank">
                                        <i className="bi bi-fire"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-12 col-md-4"> {/*GastApp*/}
                            <div className="proyecto">

                                <img src={Contar} alt="GastApp"/>

                                <div className="overlay">
                                    <p>GastApp</p>

                                    <div className="iconos-contenedor">
                                        <a href="https://github.com/Werazo/3-T-s" target="_blank">
                                        <i className="bi bi-github"></i>
                                        </a>
                                        <a href="https://appgast-9ec46.web.app/" target="_blank">
                                        <i className="bi bi-wallet2"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Portafolio;