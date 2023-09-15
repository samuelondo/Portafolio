import React, { useState } from 'react';
import Lenguajes from './Assets/lenguajes.png';
import Desarrollador from './Assets/desarrollador.jpg';
import Fullstack from './Assets/fullstack.png';


function Apirations() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalImage, setModalImage] = useState(null); 

  const abrirModal = (content, image) => {
    setShowModal(true);
    setModalContent(content);
    setModalImage(image);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };

  return (
    <div className='aspirations'>
      <h1 className='titulos'>Mis Aspiraciones</h1>

      <div className='plazos'>
        <h2 className='tituloPlazo'>Corto plazo:</h2>
        <p>
          Me percibo una persona responsable y trabajadora, por ende, con esfuerzo y tiempo lograré graduarme y presentar mis practicas mientras sigo aprendiendo para rendir de la mejor manera, y comenzar a realizar mis propios proyectos
        </p>
        <button
          className='verMas'
          onClick={() =>
            abrirModal(
              'Considero que tengo buenos conocimientos en los ámbitos de diseño web y la gestión de bases de datos, tengo una buena experiencia gracias a los varios trabajos que he realizado y las horas que les he invertido a estos deberes.',
               Lenguajes
            )
          }
        >
          Ver Más
        </button>
      </div>

      <div className='plazos'>
        <h2 className='tituloPlazo'>Mediano plazo:</h2>
        <p>
          Con trabajo y el paso del tiempo adquirir la experiencia y los conocimientos necesarios para ser un programador Semi-Senior, lograr hacer los proyectos de las personas una realidad, además de enpezar con la realización de los míos
        </p>
        <button
          className='verMas'
          onClick={() =>
            abrirModal(
              'Espero terminar mis estudios y cumplir con las prácticas de manera adecuada, adquiriendo una gran cantidad de conocimiento, reforzando las habilidades que ya tengo, y realizando trabajos más ambiciosos por mis propios medios para ganar experiencia',
              Desarrollador
            )
          }
        >
          Ver Más
        </button>
      </div>

      <div className='plazos'>
        <h2 className='tituloPlazo'>Largo plazo:</h2>
        <p>
          Certificarme en varios lenguajes de programación, tener la capacidad de manejar diversos motores de bases de datos, tener un trabajo estable como desarrollador y más precisamente como un full stack siendo capaz de manejar el front end y el back end
        </p>
        <button
          className='verMas'
          onClick={() =>
            abrirModal(
              'Como cualquier persona apasionada por el desarrollo de software uno de mis más grandes sueños es manejar una amplia variedad de lenguajes, tener un empleo etable y trabajar no solo para alguien más, sino también construir mis propios proyectos',
              Fullstack
            )
          }
        >
          Ver Más
        </button>
      </div>

      {showModal && (
        <div className='fondoModal'>
          <div className='modal'>
            {modalImage && <img src={modalImage} alt='Imagen del plazo' />}
            <p>{modalContent}</p>
            <button className='verMas' onClick={cerrarModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Apirations;