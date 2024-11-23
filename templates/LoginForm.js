import React from 'react';
import { View, Text, TextInput, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styles/LoginStyle';

const LoginForm = ({ username, setUsername, password, setPassword, showPassword, setShowPassword, handleLogin }) => {
  return (
    <ImageBackground
      source={require('../assets/bg_auth.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Image
          source={require('../assets/logo_alitas.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Ingrese usuario y contraseña{"\n"} para continuar</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Image
            source={require('../assets/icon/user2.png')}  
            style={styles.iconInside}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Image
            source={require('../assets/icon/pass2.png')}  
            style={styles.iconInside}
          />
        </View>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPasswordText}>
            {showPassword ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
          </Text>
        </TouchableOpacity>
        <Button title="Iniciar Sesion" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
};

export default LoginForm;