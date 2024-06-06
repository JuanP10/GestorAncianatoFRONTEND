import React from 'react';
import MedicationSchedule from './MedicationSchedule';
import Ordenar from './Ordenar';
import GestionInventario from './GestionInventario';
import SeguimientoMedicamento from './SeguimientoMedicamento';
import CalendarComponent from './CalendarComponent';
import '../App.css';

const Contenido = () => {
  return (
    <div className="contenido">
            <MedicationSchedule />
            <Ordenar />
            <GestionInventario />
            <SeguimientoMedicamento />
            <CalendarComponent />
    </div>
  );
};

export default Contenido;
