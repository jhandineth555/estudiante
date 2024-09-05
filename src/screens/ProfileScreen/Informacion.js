import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import User from '../../Data/User';

const Informacion = () => {

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Nombre:</Text>
          <Text style={styles.tableCell}>{User.name}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Apellido Paterno:</Text>
          <Text style={styles.tableCell}>{User.apellido1}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Apellido Materno:</Text>
          <Text style={styles.tableCell}>{User.apellido2}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>C.I.:</Text>
          <Text style={styles.tableCell}>{User.ci}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>R.U.:</Text>
          <Text style={styles.tableCell}>{User.ru}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Fecha de Nacimiento:</Text>
          <Text style={styles.tableCell}>{User.fechanac}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Direcion:</Text>
          <Text style={styles.tableCell}>{User.address}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Zona:</Text>
          <Text style={styles.tableCell}>{User.zone}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Telefono:</Text>
          <Text style={styles.tableCell}>{User.phone}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Email:</Text>
          <Text style={styles.tableCell}>{User.email}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Tipo de Sangre:</Text>
          <Text style={styles.tableCell}>{User.tiposangre}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Whatsapp:</Text>
          <Text style={styles.tableCell}>{User.whatsapp}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  table: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
 export default Informacion;