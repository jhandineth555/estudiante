import { StyleSheet } from "react-native";
const StyleScreen = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      padding: 10,
    },
    error: {
      color: 'red',
      marginBottom: 8,
    },
    img: {
      width: 350,
      height: 250, 
      resizeMode: 'contain',
    },
    table: {
      borderWidth: 1,
      borderColor: '#ccc',
    },
    tableRow: {
      flexDirection: 'row',
    },
    tableHeader: {
      flex: 1,
      padding: 8,
      backgroundColor: '#f2f2f2',
      fontWeight: 'bold',
      borderWidth: 1,
      borderColor: '#ccc',
      textAlign: 'center',
    },
    tableCell: {
      flex: 1,
      padding: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      textAlign: 'center',
    },
    alternateRow: {
      backgroundColor: '#f9f9f9',
    },
    avatar: {
      height: 155,
      width: 155,
      borderRadius: 999,
      borderWidth: 1,
      marginBottom: 10,

    },
    container2: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    buttonContainer: {
      flex: 1,  // Ocupa espacio equitativo para cada botón
      marginHorizontal: 5,
    },
    buttonStyle: {
      backgroundColor: '#2089dc',  // Color de fondo del botón
    },
    centeredText: {
      textAlign: 'center',
      fontSize: 20,
      color: 'black',
    },
    tabView: {
      marginTop: 40, // Ajusta esto si necesitas espacio adicional en la parte superior
    },
  });
  
  export default StyleScreen;
  