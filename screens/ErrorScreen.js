import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

const ErrorScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/bg_auth.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.message}>Hubo un error al intentar Iniciar Sesión,<br></br> verifique los datos ingresados.</Text>
        <Button title="Intentar otra vez" onPress={() => navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],                
  })} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(135, 206, 235, 0.8)', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ErrorScreen;