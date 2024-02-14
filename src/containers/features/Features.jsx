import React from 'react';
import possibility from '../../assets/possibility.png';
import './features.css';

const Features = () => {
  const test = 'hola';

  return (
    <div className='card'>
      <h1>Título</h1>
      <div className='card__image'>
        <img src={possibility} alt='Descripción de la imagen' />
      </div>
      <p>Tu párrafo aquí.</p>
      <div className='buttons'>
        <button>Botón 1</button>
        <button>Botón 2</button>
      </div>
    </div>
  );
};

export default Features;
