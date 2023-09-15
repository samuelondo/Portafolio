import React from "react";
import Imagen from './Assets/yo.jpg';
import Databases from './Assets/databases.jpg'


const Home = () => {
  return (
   <div className="home">
    <h1 className="titulos">Sobre Mí</h1> 
    <div>
        <img alt='' className= 'imagenHome' src={Imagen}></img>
    </div>
       
    <div className="textoHome">
        <h1>
            Samuel Londoño Alvarez
        </h1>
     <p className="descripHome">Soy un joven apasionado de la tecnología, nacido el 27 de junio de 2005 en una ciudad llamada Medellín. A mis 18 años soy es un entusiasta de la programación y estoy decidido a convertirme en un experto en este campo.</p>
    </div>
    
    <div className="textoHome2">
    <p className="descripHome2">Actualmente me encuentro estudiando la tecnología en sistemas donde he adquirido conocimientos en progrmación orientada a objetos en lenguajes como C#, desarrollo web con HTML, CSS y JavaScript y la gestión en varios motores de bases de datos como SMSS y MySQL</p>
    </div>

    <div>
    <div className="imgHome">
        <img alt='' className= 'imagenHome' src={Databases}></img>
    </div>
    </div>

   </div> 
  );
};

export default Home;