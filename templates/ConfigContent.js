import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/ConfigStyle';

const ConfigContent = ({ 
  firstName, 
  lastName, 
  username, 
  email, 
  currentPassword, 
  newPassword, 
  confirmPassword, 
  setFirstName, 
  setLastName, 
  setUsername, 
  setEmail, 
  setCurrentPassword, 
  setNewPassword, 
  setConfirmPassword, 
  updateUserData, 
  changePassword 
}) => {
  const navigation = useNavigation(); // Obtener el objeto de navegación

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/bg_auth.png')}
        style={styles.background}
      >
        {/* Habilitar desplazamiento */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            
            {/* Botón de retroceso en la parte superior izquierda */}
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => navigation.navigate('Home')} // Navegar a la pantalla Home
            >
              <Text style={styles.backButtonText}>Atrás</Text>
            </TouchableOpacity>
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Configurar Perfil</Text>
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={lastName}
                onChangeText={setLastName}
              />
              <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <TouchableOpacity style={styles.button} onPress={updateUserData}>
                <Text style={styles.buttonText}>Confirmar Cambios</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Configuración de Seguridad</Text>
              <TextInput
                style={styles.input}
                placeholder="Contraseña Actual"
                secureTextEntry
                value={currentPassword}
                onChangeText={setCurrentPassword}
              />
              <TextInput
                style={styles.input}
                placeholder="Nueva Contraseña"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirmar Nueva Contraseña"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity style={styles.button} onPress={changePassword}>
                <Text style={styles.buttonText}>Confirmar Cambios de Contraseña</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ConfigContent;