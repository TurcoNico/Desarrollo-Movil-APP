import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(135, 206, 235, 0.8)',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 10,     // Cerca del borde superior de la pantalla
    left: 10,    // Cerca del borde izquierdo de la pantalla
    backgroundColor: 'gray', // Fondo gris para el botón
    padding: 10,
    borderRadius: 5, // Opcional, si deseas bordes redondeados
  },
  backButtonText: {
    fontSize: 16,
    color: 'white', // Cambia según el tema de tu app
    fontWeight: 'bold', // Para resaltar el texto
  },
});

export default styles;