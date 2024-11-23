// TurnoScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, ImageBackground } from 'react-native';


const TurnoScreen = ({ navigation }) => {
  
  return (
    <ImageBackground
      source={require('../assets/bg_auth.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Buscar por DNI</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por DNI"
          />
        </View>
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>Fecha y Hora</Text>
          {/* Aquí puedes agregar componentes de selección de fecha y hora */}
        </View>
        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>DNI</Text>
            <Text style={styles.listHeaderText}>APELLIDO</Text>
            <Text style={styles.listHeaderText}>NOMBRE</Text>
            <Text style={styles.listHeaderText}>FECHA</Text>
            <Text style={styles.listHeaderText}>HORA</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>4000000 </Text>
            <Text style={styles.listItemText}>Rodriguez </Text>
            <Text style={styles.listItemText}>Fernando </Text>
            <Text style={styles.listItemText}>10/06/2022 </Text>
            <Text style={styles.listItemText}>15:30</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>4000001</Text>
            <Text style={styles.listItemText}>Assad</Text>
            <Text style={styles.listItemText}>Ivan</Text>
            <Text style={styles.listItemText}>10/06/2022</Text>
            <Text style={styles.listItemText}>15:30</Text>
          </View>
          {/* Agrega más elementos de la lista según sea necesario */}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(135, 206, 235, 0.8)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchContainer: {
    marginBottom: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  filterContainer: {
    marginBottom: 20,
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  listHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemText: {
    fontSize: 14,
  },
});

export default TurnoScreen;
