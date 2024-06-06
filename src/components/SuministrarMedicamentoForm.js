import React, { useState } from 'react';

const SuministrarMedicamentoForm = ({ pacientes, medicamentos, onSubmit }) => {
  const [idPaciente, setIdPaciente] = useState('');
  const [idMedicamento, setIdMedicamento] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(idPaciente, idMedicamento);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Paciente:</label>
      <select value={idPaciente} onChange={(e) => setIdPaciente(e.target.value)}>
        {pacientes.map((paciente) => (
          <option key={paciente.id} value={paciente.id}>
            {paciente.nombre}
          </option>
        ))}
      </select>

      <label>Medicamento:</label>
      <select value={idMedicamento} onChange={(e) => setIdMedicamento(e.target.value)}>
        {medicamentos.map((medicamento) => (
          <option key={medicamento.id} value={medicamento.id}>
            {medicamento.nombre}
          </option>
        ))}
      </select>

      <button type="submit">Registrar suministro</button>
    </form>
  );
};

export default SuministrarMedicamentoForm;