import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomDrawer from "./CustomDrawer";
import DrawerMatricula from "../screens/MatriculaScreen/DrawerMatricula";
import DrawerCu from "../screens/CuScreen/DrawerCu";
import Notifications from "../screens/Notificactions/Notifications";
import DrawerProgramacion from "../screens/ProgramacionScreen/DrawerProgramacion";


const Tab = createBottomTabNavigator();

const BottonTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = '';
                    switch (route.name) {
                        case 'Homes':
                            iconName = focused ? 'home' : 'home';
                            break;
                        case 'Matricula':
                            iconName = focused ? 'book' : 'book';
                            break;
                            case 'programacion':
                            iconName = focused ? 'sticky-note' : 'sticky-note';
                            break;
                        case 'Cu':
                            iconName = focused ? 'address-book' : 'address-book';
                            break;
                        case 'Notification':
                            iconName = focused ? 'bell' : 'bell';
                            break;
                    }
                    return <Icon name={iconName} size={size} color={color} />
                }
            })}
        >
            <Tab.Screen name="Homes" component={CustomDrawer} options={{ headerShown: false, title: 'Principal' } } />
            <Tab.Screen name="Matricula" component={DrawerMatricula} options={{ headerShown: false,  title: 'Matriculas'}} />
            <Tab.Screen name="Cu" component={DrawerCu} options={{ headerShown: false, title: 'Carnet Univ.'}} />
            <Tab.Screen name="programacion" component={DrawerProgramacion} options={{ headerShown: false, title: 'Programación'}} />
            <Tab.Screen name="Notification" component={Notifications} options={{ headerShown: false, title:'Notificaciones'}} />
        </Tab.Navigator>
    );
}
export default BottonTab;