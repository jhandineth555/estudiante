import React from "react";
import {  View, Image, Button } from "react-native";
import StyleScreen from "../StyleScreen";
import EncryptedStorage from 'react-native-encrypted-storage';

const HomeScreen = ({navigation}) => {
    return(
        <View>
            <Image
          style={StyleScreen.img}
            source={require('../../Assets/img/uatf.png')}
          />
        </View>
    );
}
export default HomeScreen;