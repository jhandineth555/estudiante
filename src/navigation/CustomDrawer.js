import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons";
import CustomDrawerContent from "./CustomDrawerContent";
import Logout from "../services/Logout";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
    return (
        <Drawer.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="principal" component={HomeScreen} 
            options={{title: 'Principal',
                drawerIcon : ({focused, color, size}) =>(
                    <Icon name="home-sharp" size={18} color={color} />
                )
            }}/>
            <Drawer.Screen name="profile" component={ProfileScreen}
            options={{title: 'Perfil del Estudiante',
                drawerIcon : ({focused, color, size}) =>(
                    <Icon name="person" size={18} color={color} />
                )
            }}/>
            <Drawer.Screen name="logout" component={Logout} 
            options={{title: 'Cerrar Sesion',
                drawerIcon : ({focused, color, size}) =>(
                    <Icon name="log-out" size={18} color={color} />
                )
            }}/>
        </Drawer.Navigator>
    );
}
export default CustomDrawer;
