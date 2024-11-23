import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const getUserData = async () => {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.get('http://192.168.100.69:8000/portal/api/data/', {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response.data;
};