import React, { useState } from 'react';

const SupplyMedicationForm = ({ onSubmit }) => {
  const [patientCC, setPatientCC] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(patientCC);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="CC del paciente" value={patientCC} onChange={(e) => setPatientCC(e.target.value)} required />
      <button type="submit">Marcar como suministrado</button>
    </form>
  );
}

export default SupplyMedicationForm;
