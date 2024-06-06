import React, { useState } from 'react';

const AddMedicationForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [donorId, setDonorId] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      quantity: parseInt(quantity, 10),
      expirationDate,
      donorId: parseInt(donorId, 10),
      categoryId: parseInt(categoryId, 10)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Cantidad:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      </div>
      <div>
        <label>Fecha de Vencimiento:</label>
        <input type="date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} required />
      </div>
      <div>
        <label>Cédula Donante:</label>
        <input type="number" value={donorId} onChange={(e) => setDonorId(e.target.value)} required />
      </div>
      <div>
        <label>ID Categoría:</label>
        <input type="number" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required />
      </div>
      <button type="submit">Agregar Medicamento</button>
    </form>
  );
};

export default AddMedicationForm;

