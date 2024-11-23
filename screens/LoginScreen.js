import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { getCsrfToken } from '../functions/csrfToken';
import LoginForm from '../templates/LoginForm';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Limpia los campos al cargar el componente
    const resetFields = async () => {
      const savedUsername = await AsyncStorage.getItem('username') || '';
      const savedPassword = await AsyncStorage.getItem('password') || '';
      setUsername(savedUsername);
      setPassword(savedPassword);
    };
    resetFields();
  }, []);

  const handleLogin = async () => {
    console.log('Login button pressed');
    try {
      // Realiza la solicitud POST a la API para obtener el token
      const response = await axios.post('http://192.168.100.69:8000/api/auth/login/', {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        console.log('Token:', token);

        // Guarda el token en AsyncStorage para futuras solicitudes
        await AsyncStorage.setItem('token', token);
        // Guarda el username y password en AsyncStorage
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);
        Alert.alert('Éxito', 'Inicio de sesión exitoso');
        navigation.navigate('Home');
      } else {
        navigation.navigate('Error');
        //Alert.alert('Error', 'Nombre de usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Network error:', error);
      navigation.navigate('Error');
      Alert.alert('Error', 'Hubo un problema con la solicitud.');
    }
  };

  return (
    <LoginForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      handleLogin={handleLogin}
    />
  );
};

export default LoginScreen;

