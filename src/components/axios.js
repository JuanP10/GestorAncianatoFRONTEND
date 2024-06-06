import axios from 'axios';

// URL base de la API
const BASE_URL = 'https://your-api-url.com'; // Reemplace con la URL de su API

// Instancia de Axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para obtener donaciones
export const obtenerDonaciones = async () => {
  try {
    const response = await api.get('/donations');
    const donaciones = response.data;
    // Actualice su estado o use los datos de donaciones
    console.log('Donaciones obtenidas:', donaciones);
  } catch (error) {
    console.error('Error al obtener donaciones:', error);
  }
};

// Función para agregar una donación
export const agregarDonacion = async (nuevaDonacion) => {
  try {
    const response = await api.post('/donations', nuevaDonacion);
    const donacionAgregada = response.data;
    // Actualice su estado o use la donación agregada
    console.log('Donación agregada:', donacionAgregada);
  } catch (error) {
    console.error('Error al agregar donación:', error);
  }
};

// Funciones para obtener, actualizar y eliminar medicamentos (similar a obtenerDonaciones, agregarDonacion)
// ...

// Funciones para obtener, agregar y suministrar medicamentos (similar a obtenerDonaciones, agregarDonacion)
// ...

// Funciones para obtener pacientes (similar a obtenerDonaciones)
// ...

// Funciones para registrar suministro de medicamento (similar a agregarDonacion)
// ...
