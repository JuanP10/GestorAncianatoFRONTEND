import React from 'react';
import '../App.css';

const SeguimientoMedicacion = () => {
  return (
    <div className="seguimiento">
      <h3>Seguimiento de medicamentos donados</h3>
      <div className="seguimiento-grid">
        {/* Aquí puedes agregar el calendario con los horarios */}
        <div className="seguimiento-item">1</div>
        <div className="seguimiento-item">2</div>
        <div className="seguimiento-item">3</div>
        {/* Agrega más items según el diseño del calendario */}
      </div>
    </div>
  );
};

export default SeguimientoMedicacion;
