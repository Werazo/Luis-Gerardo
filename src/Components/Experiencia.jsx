import React from 'react';

const Experiencia = () => {
    return ( 
        <>
            <section className="experiencia seccion-clara">
                <div className="container text-center">
                    <div className="row">
                    {/*Desarrollo web*/}
                        <div className="columna col-12 col-md-6">
                                <i className="bi bi-laptop-fill"></i>
                                <h3 className="experiencia-titulo">Desarrollo web</h3>
                                <p >
                                    Diseño y desarrollo de interfaces atractivas y responsivas, combinando creatividad con funcionalidad.
                                    Suelo escribir el código desde cero, pero también me gusta usar Bootstrap.
                                </p>
                            <div className="badges-contenedor"> {/*Badge*/}
                                <span className="badge text-bg-primary">HTML</span>
                                <span className="badge text-bg-primary">CSS</span>
                                <span className="badge text-bg-primary">JavaScript</span>
                                <span className="badge text-bg-primary">React</span>
                            </div>
                        </div>
                    {/*Estudio*/}
                        <div className="columna col-12 col-md-6">
                            <i className="bi bi-journal-code"/>
                            <h3>Formación</h3>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">CBtis no. 168/Tecnico en Progremación.</li>
                                <li className="list-group-item">React y Firebase: El Curso Completo, Práctico y desde Cero</li>
                            </ul>

                            <div className="badges-contenedor"> {/*Badge*/}
                                <span className="badge text-bg-primary">freeCodeCamp</span>
                                <span className="badge text-bg-primary">Desarrollo Web</span>
                                <span className="badge text-bg-primary">Udemy</span>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Experiencia;