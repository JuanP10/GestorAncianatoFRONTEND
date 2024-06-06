import React, { useState } from 'react';

const ActualizarVencimientoForm = ({ medicamento, onSubmit }) => {
  const [nuevaFechaVencimiento, setNuevaFechaVencimiento] = useState(medicamento.fechaVencimiento);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(medicamento.id, nuevaFechaVencimiento);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nueva fecha de vencimiento:</label>
      <input type="date" value={nuevaFechaVencimiento} onChange={(e) => setNuevaFechaVencimiento(e.target.value)} />

      <button type="submit">Actualizar</button>
    </form>
  );
};

export default ActualizarVencimientoForm;