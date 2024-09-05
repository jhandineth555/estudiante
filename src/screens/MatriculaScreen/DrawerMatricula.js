import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import CompraMatricula from "./CompraMatricula";
import MatriculaScreen from "./MatriculaScreen";
import CustomDrawerContent from "../../navigation/CustomDrawerContent";
 
const drawmatricula = createDrawerNavigator();
 const DrawerMatricula = () => {
    return(
        <drawmatricula.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <drawmatricula.Screen 
            name="matriculadigital" 
            component={MatriculaScreen} 
            options={{title: 'Matricula Digital',
                drawerIcon : ({focused, color, size}) =>(
                    <Icon name="document-text-outline" size={18} color={color} />
                )
            }}/>
            <drawmatricula.Screen 
            name="mismatriculas" 
            component={CompraMatricula}
            options={{title: 'Mis Matriculas',
                drawerIcon : ({focused, color, size}) =>(
                    <Icon name="documents-outline" size={18} color={color} />
                )
            }}/>
        </drawmatricula.Navigator>
    )
 }
 export default DrawerMatricula;