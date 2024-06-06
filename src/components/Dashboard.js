import React from 'react';
import InventoryStatus from './InventoryStatus';
import MedicationSchedule from './MedicationSchedule';
import Notifications from './Notifications';
import '../App.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="medication-info">
        <div className="card">
          <h2>Medicamento expirado</h2>
          <p>Descripción breve...</p>
          <button>Verificar</button>
        </div>
        <div className="card">
          <h2>Organizar</h2>
          <p>Descripción breve...</p>
          <button>Notificar</button>
        </div>
        <div className="card">
          <h2>Gestión de inventario de medicamentos</h2>
          <p>Descripción breve...</p>
          <button>Verificar</button>
        </div>
        <div className="card">
          <h2>Seguimiento de medicamentos donados</h2>
          <p>Descripción breve...</p>
          <button>Donar</button>
        </div>
      </div>
      <MedicationSchedule />
      <InventoryStatus />
      <Notifications />
    </div>
  );
};

export default Dashboard;
