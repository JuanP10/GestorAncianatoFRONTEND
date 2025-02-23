import axios from 'axios';
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../App.css';
import AddMedicationForm from './AddMedicationForm';
import SupplyMedicationForm from './SupplyMedicationForm';

const Medication = () => {
  const [medications, setMedications] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSupplyForm, setShowSupplyForm] = useState(false);
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const normalizeName = (name) => name.trim().toLowerCase();

  const handleAddMedication = async (newMedication) => {
    const medicationDto = {
      id: 0, // Assuming ID is auto-generated by the backend
      nombre: newMedication.name,
      cantidad: newMedication.quantity,
      fechaVencimiento: newMedication.expirationDate,
      cedulaDonante: newMedication.donorId,
      idsCategorias: [newMedication.categoryId] // Assuming single category ID
    };

    try {
      const response = await axios.post('http://localhost:8080/medicamento', medicationDto);
      const savedMedication = response.data;
      const normalizedMedicationName = normalizeName(savedMedication.nombre);
      const updatedMedications = [...medications];
      const existingGroupIndex = updatedMedications.findIndex(medication => normalizeName(medication.name) === normalizedMedicationName);

      if (existingGroupIndex !== -1) {
        // Medication group already exists, add new entry to the group
        const existingGroup = updatedMedications[existingGroupIndex];
        existingGroup.entries.push(savedMedication);
        existingGroup.quantity += savedMedication.cantidad;
        if (!existingGroup.categories.includes(savedMedication.idsCategorias[0])) {
          existingGroup.categories.push(savedMedication.idsCategorias[0]);
        }
      } else {
        // New medication group, add to list
        updatedMedications.push({
          name: savedMedication.nombre,
          categories: [savedMedication.idsCategorias[0]],
          quantity: savedMedication.cantidad,
          expirationDate: savedMedication.fechaVencimiento,
          supplied: false,
          patientCC: '',
          entries: [savedMedication]
        });
      }

      setMedications(updatedMedications);
      setShowAddForm(false);
    } catch (error) {
      console.error('Error saving medication', error);
    }
  };

  const handleSupplyMedication = (patientCC) => {
    const updatedMedications = [...medications];
    const medication = updatedMedications[selectedGroup].entries[selectedMedication];
    medication.supplied = true;
    medication.patientCC = patientCC;
    setMedications(updatedMedications);
    setShowSupplyForm(false);
  };

  const handleDeleteMedication = (groupIndex, medicationIndex) => {
    const updatedMedications = [...medications];
    const group = updatedMedications[groupIndex];
    group.entries.splice(medicationIndex, 1);

    if (group.entries.length === 0) {
      updatedMedications.splice(groupIndex, 1);
    } else {
      group.quantity = group.entries.reduce((sum, entry) => sum + entry.cantidad, 0);
    }

    setMedications(updatedMedications);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className='content'>
          <ul>
            {medications.map((group, groupIndex) => (
              <li key={groupIndex}>
                {group.name} - Categorías: {group.categories.join(', ')} - Cantidad total: {group.quantity} - Fecha de vencimiento: {group.expirationDate}
                <button onClick={() => {
                  setSelectedGroup(groupIndex);
                  setShowAddForm(true);
                }}>Agregar Medicamento</button>
                <ul>
                  {group.entries.map((medication, medicationIndex) => (
                    <li key={medicationIndex}>
                      {medication.nombre} - {medication.category} - {medication.cantidad} - {medication.fechaVencimiento}
                      <button onClick={() => handleDeleteMedication(groupIndex, medicationIndex)}>Eliminar</button>
                      <button onClick={() => {
                        setSelectedGroup(groupIndex);
                        setSelectedMedication(medicationIndex);
                        setShowSupplyForm(true);
                      }}>{medication.supplied ? `Suministrado a ${medication.patientCC}` : 'Marcar como suministrado'}</button>
                    </li>
                  ))}
                </ul>
                <button className="details-button">Detalles</button>
              </li>
            ))}
          </ul>
          <button onClick={() => setShowAddForm(true)}>Agregar Medicamento</button>
          {showAddForm && (
            <AddMedicationForm onSubmit={handleAddMedication} />
          )}
          {showSupplyForm && (
            <SupplyMedicationForm onSubmit={handleSupplyMedication} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Medication;
