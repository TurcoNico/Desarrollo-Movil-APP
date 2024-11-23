import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const API_URL = 'http://192.168.100.69:8000/portal/usersettings/api';

export const fetchUserData = async (setUserData) => {
  try {
    const token = await AsyncStorage.getItem('token'); 

    const response = await fetch(`${API_URL}/profile/`, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`, 
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener los datos del usuario.');
    }

    const data = await response.json();
    setUserData(data); // Llama a la función para establecer los datos del usuario

  } catch (error) {
    console.error('Error:', error);
    Alert.alert('Error', 'No se pudo obtener los datos del usuario.');
  }
};

export const updateUserData = async (userData, navigation) => {
  try {
    const token = await AsyncStorage.getItem('token');

    const response = await fetch(`${API_URL}/profile/`, {
      method: 'PUT',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Error al actualizar los datos.');
    }

    Alert.alert('Éxito', 'Los datos se han actualizado correctamente.');
    navigation.goBack(); // Volver a la pantalla anterior

  } catch (error) {
    console.error('Error:', error);
    Alert.alert('Error', error.message || 'No se pudo actualizar los datos.');
  }
};

export const changePassword = async (passwordData, navigation) => {
  if (passwordData.newPassword !== passwordData.confirmPassword) {
    Alert.alert('Error', 'Las contraseñas no coinciden.');
    return;
  }

  try {
    const token = await AsyncStorage.getItem('token');

    const response = await fetch(`${API_URL}/change-password/`, {
      method: 'PUT',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        old_password: passwordData.currentPassword,
        new_password: passwordData.newPassword,
        confirm_password: passwordData.confirmPassword, 
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.old_password) {
        throw new Error(errorData.old_password[0]); // Suponiendo que el error está en un array
      }
      throw new Error('Error al cambiar la contraseña.'); // Manejo general de errores
    }

    Alert.alert('Éxito', 'La contraseña se ha cambiado correctamente.');
    navigation.goBack(); // Volver a la pantalla anterior

  } catch (error) {
    console.error('Error:', error);
    Alert.alert('Error', error.message || 'No se pudo cambiar la contraseña.');
  }
};