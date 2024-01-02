import React from 'react';
import Yo from '../assets/Img/yo.jpeg';
import PC from '../assets/Img/PC.png'

const Hero = () => {
    return ( 
        <>
            <section className="hero align-items-stretch" >
            <div className="hero-principal d-flex flex-column justify-content-center align-items-center">

                <img src={Yo} alt="Foto Perfil" id="FotoPerfil"/>
                <h1>Luis Gerardo</h1>
                <h2>Front-End Developer</h2>

            </div>

            <div className="hero-inferior">
                <img src={PC} alt="HTML, CSS, JS, PC" className="hero-inferior-img img-fluid"/>
            </div>
            </section>
        </>
     );
}
 
export default Hero;