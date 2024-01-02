import React from 'react';

const Contacto = () => {
    return ( 
        <>
            <section id="Contacto" className="contacto seccion_obscura margen">

            <div className="container">
                <div className="container text-center d-flex justify-content-evenly rectangulo">

                    <div className="row">
                        <div className="col-12 col-md-4 seccion_titulo">
                            Hablemos!
                        </div>

                        <div className="col-12 col-md-4 descricion">
                            Buscame y hare que tu vision se haga realidad 
                        </div>

                        <div className="col-12 col-md-4 descricion">
                            <a href="mailto: guero-37@hotmail.com">
                                <button type="button">
                                    Contacto
                                    <i className="bi bi-envelope-fill"></i>
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            </section>
        </>
     );
}
 
export default Contacto;