import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import styles from '../styles/HomeStyle'; // Importa los estilos

const HomeContent = ({ userData, loading, handleLogout, navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/bg_auth.png')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {userData.profesion || 'Cargando...'}: {userData.full_name || 'Cargando...'}
          </Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        {loading ? ( // Mostrar indicador de carga
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Text style={styles.title}>OPCIONES</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TurnoScreen')}>
                <Image source={require('../assets/icon/appointment.png')} style={styles.image} />
                <Text style={styles.buttonText}>Turnos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConfigScreen')}>
                <Image
                  source={require('../assets/icon/setting.png')}
                  style={styles.image}
                />
                <Text style={styles.buttonText}>Configuración</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default HomeContent;