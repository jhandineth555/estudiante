import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import vermiProgramacion from "./VermiProgramacion";
import verNotas from "./VerNotas";
import ProgramacionNormal from "./ProgramacionNormal";
import ProgramacionCursosdeVerano from "./ProgramacionCursosdeVerano";
import ImprimirKardex from "./ImprimirKardex";
import ImprimirKardexPensum from "./ImprimirKardexPensum";
import ProgramacionMesadeExamen from "./ProgramacionMesadeExamen";
import CustomDrawerContent from "../../navigation/CustomDrawerContent";
import Icon from "react-native-vector-icons/FontAwesome6"
import Icons from "react-native-vector-icons/MaterialCommunityIcons"

const DrawerProg = createDrawerNavigator();

const DrawerProgramacion = () => {
    return (
        <DrawerProg.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <DrawerProg.Screen name="verprogramacion"
                component={vermiProgramacion}
                options={{
                    title: 'Ver Mi Programación',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icons name="file-eye-outline" size={18} color={color} />
                )}}
            />
            <DrawerProg.Screen name="notas" component={verNotas}
                options={{
                    title: 'Ver Notas',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icons name="file-document-edit-outline" size={18} color={color} />
                )}} 
            />
            <DrawerProg.Screen name="programarmaterias"
                component={ProgramacionNormal}
                options={{
                    title: 'Programar Materias',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icons name="file-cog-outline" size={18} color={color} />
                )}} 
            />
            <DrawerProg.Screen name="mesadeexamen"
                component={ProgramacionMesadeExamen}
                options={{
                    title: 'Programar Mesa de Examen',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icons name="file-cog-outline" size={18} color={color} />
                )

                }}
            />
            <DrawerProg.Screen name="cursosdeverano"
                component={ProgramacionCursosdeVerano}
                options={{
                    title: 'Programar Cursos de Veranos',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icons name="file-cog-outline" size={18} color={color} />
                )}}
            />
            <DrawerProg.Screen name="kardex"
                component={ImprimirKardex}
                options={{
                    title: 'Imprimir Kardex',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="file-pdf" size={18} color={color} />
                )}} 
            />
            <DrawerProg.Screen name="kardexpensum"
                component={ImprimirKardexPensum}
                options={{
                    title: 'Imprimir Kardex Pensum',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="file-pdf" size={18} color={color} />
                )}} 
            />
        </DrawerProg.Navigator>
    )
}
export default DrawerProgramacion;