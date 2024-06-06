import React from 'react';

const PacientesList = ({ pacientes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Medicamentos suministrados</th>
        </tr>
      </thead>
      <tbody>
        {pacientes.map((paciente) => (
          <tr key={paciente.id}>
            <td>{paciente.nombre}</td>
            <td>{paciente.medicamentosSuministrados.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PacientesList;