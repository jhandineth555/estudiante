import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput,  StyleSheet, Alert, Button  } from 'react-native'
import ProfileScreen from './ProfileScreen';

export default function UpdateData() {
  const [whatsapp, setwhatsapp] = useState();
  const [email, setemail] = useState('');

  const updateUser = async () => {
    try {
      const response = await fetch(`url de backend`, {
        method: 'PUT', // o 'PATCH'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: whatsapp,
        }),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        Alert.alert('Éxito', ' Actualizado con éxito');
        console.log(jsonResponse);
      } else {
        Alert.alert('Error', 'No se pudo actualizar ');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al actualizar ');
    }
  };
  return (
    <View style={styles.container}>
    <Text style={styles.label}>Numero de Whastapp:</Text>
    <TextInput
      style={styles.input}
      value={whatsapp}
      onChangeText={setwhatsapp}
      keyboardType="numeric"
    />
    <Text style={styles.label}>Email:</Text>
    <TextInput
      style={styles.input}
      value={email}
      onChangeText={setemail}
    />
    <Button title="Actualizar" onPress={ProfileScreen} />
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
