import React from 'react';
import '../App.css';

const MedicationSchedule = () => {
  return (
    <div className="medication-schedule">
      <h3>Medicamentos expirados</h3>
      <div className="schedule-grid">
        {/* Aquí puedes agregar el calendario con los horarios */}
        <div className="schedule-item">1</div>
        <div className="schedule-item">2</div>
        <div className="schedule-item">3</div>
        {/* Agrega más items según el diseño del calendario */}
      </div>
    </div>
  );
};

export default MedicationSchedule;
