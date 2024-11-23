import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(135, 206, 235, 0.8)',
    paddingTop: 60,
  },
  section: {
    marginBottom: 30,
    alignItems: 'center', // Centrar todos los elementos en la sección
    width: '90%',         // Ajustar el ancho de la sección
    backgroundColor: '#ffffff', // Fondo blanco para destacar la sección
    padding: 20,          // Espaciado interno
    borderRadius: 10,     // Bordes redondeados para una apariencia más moderna
    elevation: 3,         // Sombra (para Android)
    shadowColor: '#000',  // Sombra (para iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 20,         // Tamaño de fuente más grande
    fontWeight: 'bold',
    marginBottom: 15,     // Espaciado inferior para separar el título del formulario
    textAlign: 'center',  // Centrar texto
    color: '#333',        // Color más oscuro para el texto
  },  
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,      // Bordes redondeados para los inputs
    width: '100%',        // Ajustar ancho al contenedor
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
    top: 40, // Suficiente espacio para evitar conflictos con elementos superiores
    left: 20, // Separación del borde izquierdo
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo semitransparente para contraste
    padding: 10,
    borderRadius: 5,
    zIndex: 10, // Prioridad alta para estar sobre otros elementos
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  backButtonText: {
    fontSize: 16,
    color: 'white', // Cambia según el tema de tu app
    fontWeight: 'bold', // Para resaltar el texto
  },
});

export default styles;