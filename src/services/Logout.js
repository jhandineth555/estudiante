import React from "react";
import { View, Button } from "react-native";
import EncryptedStorage from 'react-native-encrypted-storage';
const Logout = ({navigation}) => {
  const handleLogout = async () => {
    try {
      
      await EncryptedStorage.removeItem('authToken');
      
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.log('Error al cerrar sesión', error);
    }
  };
  return(
    <View>
    <Button 
    title="Salir"
    onPress={handleLogout}/>
    </View>
  );
}
export default Logout;