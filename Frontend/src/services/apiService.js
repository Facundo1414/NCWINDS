const BASE_URL = 'https://localhost:3306/viajestravel';

// Función para obtener datos de un endpoint específico
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error('Error al obtener datos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error de red:', error);
    throw error;
  }
};

// Función para enviar datos a un endpoint específico
export const sendData = async (endpoint, requestData) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });
    if (!response.ok) {
      throw new Error('Error al enviar datos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error de red:', error);
    throw error;
  }
};