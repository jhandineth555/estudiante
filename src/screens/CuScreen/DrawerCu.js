import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CuScreen from "./CuScreen";

const Drawercu = createDrawerNavigator();

const DrawerCu = () => {
    return(
        <Drawercu.Navigator>
        <Drawercu.Screen name="cu" component={CuScreen} options={{title: 'Carnet Universitario'}}/>

        </Drawercu.Navigator>
    )
}
export default DrawerCu;