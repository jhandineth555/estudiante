import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import User from '../Data/User';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={ require('../Assets/img/avatar.png')}
          style={styles.image}
        />
        <Text style={styles.username}>{User.name} {User.apellido1} {User.apellido2}</Text>
        <Text style={styles.username}>R.U.: {User.ru}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, // Hacer la imagen circular
    marginBottom: 10,
  },
  username: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CustomDrawerContent;
