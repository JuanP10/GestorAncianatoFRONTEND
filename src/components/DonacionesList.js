import React from 'react';

const DonacionesList = ({ donaciones }) => {
  return (
    <ul>
      {donaciones.map((donacion) => (
        <li key={donacion.id}>
          {donacion.nombreDonante} - {donacion.medicamentos.join(', ')}
        </li>
      ))}
    </ul>
  );
};

export default DonacionesList;