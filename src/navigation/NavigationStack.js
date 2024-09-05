import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import BottonTab from './BottonTab';
import UpdateData from '../screens/ProfileScreen/UpdateData';
import AuthService from '../services/AuthService';

const Stack = createStackNavigator();

const NavigationStack = () => {
    return(
        <Stack.Navigator initialRouteName='AuthService'>
            <Stack.Screen name='auth' component={AuthService} options={ {headerShown : false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={ {headerShown : false} }/>
            <Stack.Screen name='Home' component={ BottonTab} options={ {headerShown : false} }/>
            <Stack.Screen name='Actualizar' component={ UpdateData }/>
        </Stack.Navigator>
    )
}
export default NavigationStack;