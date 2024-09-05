import React, { useState } from "react";
import { Text, View, Button, Image, StyleSheet, ScrollView, TextInput } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const CuScreen = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const selectImage = () => {
        launchImageLibrary(
            { mediaType: 'photo', includeBase64: true },
            (response) => {
                if (response.assets && response.assets.length > 0) {
                    const imageUri = response.assets[0].uri;
                    setSelectedImage(imageUri); // Guardar la URI de la imagen seleccionada
                }
            }
        );
    };

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>{'\n'}Foto para el carnet universitario
                </Text>


                {selectedImage ? (
                    <Image source={{ uri: selectedImage }} style={styles.image} />
                ) : (
                    <Text>No hay imagen seleccionada</Text>
                )}
                <Text style={{ color: 'blue' }}>La fotografia debe ser con fondo celeste.{'\n'} El formato debe ser JPG y el tamaño aceptable{'\n'}</Text>
                <Button title="Eligir Archivo..." onPress={selectImage} />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Formulario de Registro</Text>

                <Text style={styles.text}>ZONA:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.text}> DIRECCION:</Text>
                <TextInput
                    style={[styles.input, { with: '200%' }]}
                    placeholder=""
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={styles.text}>TELEFONO(FIJO):</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <Text style={styles.text}>TELEFONO PERSONAL:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <Text style={styles.text}>TELEFONO DE REFERENCIA O URGENCIA:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <Text style={styles.text}>CORREO ELECTRONICO:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <Text style={styles.text}>TIPO DE SANGRE:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.container2}>
                <View style={styles.buttonContainer}>
                    <Button title="Imprimir Datos Actuales " onPress={() => alert('Datos Impresos')} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Guardar Datos" onPress={() => alert('Datos Actualizados')} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        justifyContent: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 0,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 16,
        paddingHorizontal: 130,
    },
    text: {
        fontSize: 20,
        marginBottom: 8,
        color: 'black'
    },
});
export default CuScreen;