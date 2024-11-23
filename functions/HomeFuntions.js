import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { getUserData } from '../functions/UserData';

export const fetchUserData = async (setUserData, setLoading) => {
  setLoading(true);
  try {
    const data = await getUserData();
    setUserData(data);
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'No se pudo obtener la información del usuario.');
  } finally {
    setLoading(false);
  }
};

export const handleLogout = async (navigation) => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('username');
  await AsyncStorage.removeItem('password');
  navigation.reset({
    index: 0,
    routes: [{ name: 'Login' }], // Navegar a la pantalla de login
  });
};