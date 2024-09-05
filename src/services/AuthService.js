import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
const AuthService = ({navigation}) => {
    useEffect(()=>{
        const checkAuth = async () => {
            const token = await EncryptedStorage.getItem('authToken');
            if (token) {
                navigation.navigate('Home');
            } else {
                navigation.navigate('Login');
            }
        };
        checkAuth();
    }, [navigation]);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
  );
};

export default AuthService;