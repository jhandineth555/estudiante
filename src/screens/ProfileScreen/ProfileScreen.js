import React, {useState} from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions, Dimensions, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StyleScreen from '../StyleScreen';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Avatar } from 'react-native-elements';
import Informacion from './Informacion';
import Lugar from './Lugar';
import InfoAcademica from './InfoAcademica';
import profiledata from '../../Data/profiledata';

const renderScene = SceneMap({
  info: Informacion,
  infoacademica: InfoAcademica,
  lugar: Lugar,
});


export default function ProfileScreen({navigation}) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'info', title: 'INFORMACION ESTUDIANTE' },
    { key: 'infoacademica', title: 'INFORMACION ACADEMICA' },
    { key: 'lugar', title: 'INFORMACION LOCALIDAD' },
  ]);

  const [currentTemplate, setCurrentTemplate] = useState('profile');
  const botton = () => {
    switch (currentTemplate) {
      case 'information':
        return < Informacion/>;
      case 'lugar':
        return <Lugar />;
        case 'infoacademica':
        return <InfoAcademica />;
      default:
        return <ProfileScreen />;
    }
  };
  return (
    <ScrollView style={{flex: 1, 
      backgroundColor: 'white',
    }}>
      <View style={{color: 'black'}}>
        <Text>{'\n'}</Text>
        <Text style={StyleScreen.centeredText}>CARRERA: {profiledata.carrera} {'\n'}</Text>
        </View>
      <View  style={{  flex: 1, alignItems: 'center'}}>
      <Avatar
        size="xlarge"
        resizeMode='contain'
        rounded
        source={ require('../../Assets/img/avatar.png')}
        containerStyle={StyleScreen.avatar}
      />
      <Text style={{ marginTop: 10, color:'black' }}>R.U. : 7654321{'\n'}</Text>
      </View >
      <View>
        <Text style={StyleScreen.centeredText}>INFORMACION{'\n'}</Text>
      </View>
      <View style={StyleScreen.container2}>
      <TouchableOpacity style={{
        width: 210,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#11115e',
        borderRadius: 10,
        marginHorizontal: 2,}}
        onPress={() => navigation.navigate('Actualizar')}
        >
        <Text style={{color: 'white'}}>
          REGISTRAR TELEFONO Y EMAIL
        </Text>
      </TouchableOpacity>
    </View> 
    <View style={{ height: Dimensions.get('window').height }}> 
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />  
    </View>   
    </ScrollView>
  );
}
