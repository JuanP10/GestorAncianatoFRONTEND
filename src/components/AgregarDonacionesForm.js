import React, { useState } from 'react';

const AgregarDonacionForm = ({ onSubmit }) => {
  const [nombreDonante, setNombreDonante] = useState('');
  const [medicamentos, setMedicamentos] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevaDonacion = { nombreDonante, medicamentos };
    onSubmit(nuevaDonacion);
    setNombreDonante('');
    setMedicamentos('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre del donante:</label>
      <input type="text" value={nombreDonante} onChange={(e) => setNombreDonante(e.target.value)} />

      <label>Medicamentos donados (separados por coma):</label>
      <input type="text" value={medicamentos} onChange={(e) => setMedicamentos(e.target.value)} />

      <button type="submit">Agregar donación</button>
    </form>
  );
};

export default AgregarDonacionForm;