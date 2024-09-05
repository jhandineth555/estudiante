import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import NavigationStack from './src/navigation/NavigationStack';

const App  = () => {
    return(
        <NavigationContainer>
            <NavigationStack/>
        </NavigationContainer>
    )
} 
export default App;