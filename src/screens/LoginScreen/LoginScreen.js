import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import EncryptedStorage from 'react-native-encrypted-storage';
import User from '../../Data/User';

const LoginScreen = ({ navigation }) => {
  const [ru, setRu] = useState('');
  const [clave, setClave] = useState('');
  const [token, setToken] = useState(null);

  const login = async (token) => {
    try {
      const response = await fetch('url del backend',{
        method: 'POST',
        headers: {
            'Content-Type' : 'aplication/json', 
        },
      });
      const data = await response.json();

      if(response.ok) {
        await EncryptedStorage.setItem(
          'jwt_token',
          data.token
        );
        navigation.navigate('Home');
      } else {
        Alert.alert('Login Failed', data.message || 'Por favor intente de nuevo...');
      }
    } catch (error) {
      Alert.alert('Login error', 'Algo salió mal por favor intente nuevamente mas tarde...');
    }
  };



  const handleSubmit = async (values) => {
    try {
      
      if (values.ru === User.ru && values.clave === User.clave) {
        const token = 'simulatedToken12345';
        await EncryptedStorage.setItem('authToken', token);
        console.log('Login successful! Token saved.');
        navigation.navigate('Home');
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Failed to save token', error);
    }
  };

  const validationSchema = Yup.object().shape({
    ru: Yup.string().min(5, 'R.U. incorrecto').required('Campo Obligatorio'),
    clave: Yup.string().min(6, 'Clave Incorrecta').required('Campo Obligatorio')
  });

  return (
    <Formik
      initialValues={{ ru: '', clave: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require('../../Assets/img/uatf.png')}
          />
          <Text>{'\n'}</Text>
          <TextInput
            style={styles.input}
            placeholder="R.U."
            onChangeText={handleChange('ru')}
            onBlur={handleBlur('ru')}
            value={values.ru}
          />
          {touched.ru && errors.ru && <Text style={styles.error}>{errors.ru}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Clave"
            onChangeText={handleChange('clave')}
            onBlur={handleBlur('clave')}
            value={values.clave}
            secureTextEntry
          />
          {touched.clave && errors.clave && <Text style={styles.error}>{errors.clave}</Text>}
          <Button onPress={handleSubmit} title="Iniciar Sesión" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
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
});

export default LoginScreen;