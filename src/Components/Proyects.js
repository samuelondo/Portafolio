import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Codigo from './Assets/código página web.jpeg';
import Reggeaton from './Assets/reggeaton.jpeg';
import Recomendaciones from './Assets/recomendaciones.jpeg';
import LibreriaLogica from './Assets/libreria_logica.jpeg'
import Form from './Assets/form.jpeg'
import Procedimiento from './Assets/procedimientos.jpeg'
import Visual from './Assets/visual.jpeg'

function Proyects() {
  return (
    <div className='proyectos'>
      <h1 className='titulos'>Mis Trabajos</h1>

      <div className='proyects'>
        <Carousel showThumbs={false} className='carrusel'>
          <div>
            <img src={Reggeaton} alt="" />
            <p className="legend" style={{ color: 'rgba(0, 0, 0)', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>Esta es la parte inicial del index de reggeaton</p>
          </div>
          <div>
            <img src={Recomendaciones} alt="" />
            <p className="legend" style={{ color: 'rgba(0, 0, 0)', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>Recomendaciones de mi parte</p>
          </div>
          <div>
            <img src={Codigo} alt="" />
            <p className="legend" style={{ color: 'rgba(0, 0, 0)', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>Una sección del código, para visualizar la página completa ingresar a: <a href='https://elgenero.netlify.app/' target='blank' rel='noopener noreferrer'>El Genero</a></p>
          </div>
        </Carousel>

        <div className='textoProyectos'>
          <h2 className='subtitulo'>Pagina Web con modelo responsivo</h2>
          <p>
            Esta página fue el proyecto final de segundo trimestre de la competencia de diseño web, fue realizada por dos compañeros y mi persona, siendo yo quién hizo la mayor parte de html, css y las funciones de JavaScript con las que cuenta la página. Cuenta con un login con validaciones desde JavaScript, además de un modelo completamente responsivo, fue creada bajo el tema central del género urbano latino desde el ámbito musical contando con parte de su historia y recomendaciones personales.
          </p>
        </div>
      </div>

      <div className='proyects'>

        <div className='textoProyectos'>
          <h2 className='subtitulo'>Aplicación de escritorio con C#</h2>
          <p>
            Esta aplicación fue el proyecto final del segundo trimestre, se hizo utilizando varias librerías para el apartado lógico y un form para la parte visual con botones, textbox y labels, y junto a esto un archivo SQL hecho en Microsoft SQL Server con tablas referentes a los medicos, medicamentos, EPS y paciente, junto con procedimientos de almacenado para la insercción, actualización y eliminación de datos, y junto a esto ventanas para la confirmación de dichas acciones.</p>
        </div>

        <Carousel showThumbs={false} className='carrusel'>
          <div>
            <img src={Visual} alt="" />
            <p className="legend" style={{ color: 'rgba(0, 0, 0)', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>Form o parte visual</p>
          </div>
          <div>
            <img src={Form} alt="" />
            <p className="legend" style={{
              color: 'rgba(0, 0, 0)',
              backgroundColor: 'rgba(255, 255, 255, 0.7)'
            }}>Sección de código del Form</p>
          </div>
          <div>
            <img src={LibreriaLogica} alt="" />
            <p className="legend" style={{
              color: 'rgba(0, 0, 0)',
              backgroundColor: 'rgba(255, 255, 255, 0.7)'
            }}>Secció de código de la librería donde se ejecutan las sentencias SQL</p>
          </div>
          <div>
            <img src={Procedimiento} alt="" />
            <p className="legend" style={{ color: 'rgba(0, 0, 0)', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>Procedimiento de almacenado en SQL SERVER</p>
          </div>
        </Carousel>


      </div>

    </div>
  );
}

export default Proyects;
