import React from 'react';
import '../App.css';

const Ordenar = () => {
  return (
    <div className="orden">
      <h3>Organizar</h3>
      <div className="orden-grid">
        {/* Aquí puedes agregar el calendario con los horarios */}
        <div className="orden-item">1</div>
        <div className="orden-item">2</div>
        <div className="orden-item">3</div>
        {/* Agrega más items según el diseño del calendario */}
      </div>
    </div>
  );
};

export default Ordenar;
