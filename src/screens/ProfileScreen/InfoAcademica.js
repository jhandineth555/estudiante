import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import profiledata from '../../Data/profiledata';

export default function InfoAcademica() {
  return (
    <View style={styles.container}>
    <View style={styles.table}>
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>Facultad:</Text>
        <Text style={styles.tableCell}>{profiledata.facultad}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>Carrera:</Text>
        <Text style={styles.tableCell}>{profiledata.carrera}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>Direccion:</Text>
        <Text style={styles.tableCell}>{profiledata.direccioncarrera}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>Colegio de Egreso:</Text>
        <Text style={styles.tableCell}>{profiledata.colegioEgreso}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>Fecha de Incripcion:</Text>
        <Text style={styles.tableCell}>{profiledata.fechaIncripcion}</Text>
      </View>
    </View>
  </View>

  )
}
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