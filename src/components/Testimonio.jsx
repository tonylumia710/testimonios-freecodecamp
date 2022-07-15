import React from 'react';
import '../stylesheet/Testimonio.css';

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../img/${props.imagen}`)}
      alt='foto 1'
      />
      <div className='cont-texto-testimonio'>
        <p clasName='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio' > {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio' dangerouslySetInnerHTML={{ __html: props.testimonio}} />
      </div>
    </div>
  );
}

export default Testimonio;