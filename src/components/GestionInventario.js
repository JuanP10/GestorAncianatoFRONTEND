import React from 'react';
import '../App.css';

const GestionInventario = () => {
  return (
    <div className="gestion-inventario">
      <h3>Gestionar inventario de medicamentos</h3>
      <div className="inventario-grid">
        {/* Aquí puedes agregar el calendario con los horarios */}
        <div className="inventario-item">1</div>
        <div className="inventario-item">2</div>
        <div className="inventario-item">3</div>
        {/* Agrega más items según el diseño del calendario */}
      </div>
    </div>
  );
};

export default GestionInventario;
