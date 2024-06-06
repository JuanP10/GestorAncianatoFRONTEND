import React from 'react';
import Notifications from './Notifications';
import '../App.css';

const InventoryStatus = () => {
  return (
    <div className="inventory-status">
      <h2>Estado de inventario</h2>
      <div className="inventory-item">
        <img src="path/to/inventory/image" alt="Inventory" /> {/* Ruta a la imagen del inventario */}
        <p>Alivio del dolor</p>
        <span>Expira pronto: 5 días</span>
      </div>
      <div className="categories">
        <h3>Categorías</h3>
        <p>Medicamentos con receta: 45</p>
        <p>Suplementos: 30</p>
        <p>Medicamentos no utilizados: 15</p>
      </div>
      <Notifications />
    </div>
  );
};

export default InventoryStatus;
