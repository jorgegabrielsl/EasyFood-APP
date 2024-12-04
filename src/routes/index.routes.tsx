import React from "react";
import Inicio from '../pages/Inicio/';
import Cadastro from '../pages/cadastro/';
import Login from '../pages/login'
import { createStackNavigator } from "@react-navigation/stack";
import { themas } from "../global/themes";
import Home from '../pages/home';

export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:themas.Colors.fundo,
                }
            }}
        >
            <Stack.Screen name="Inicio"
            component={Inicio}/>

            <Stack.Screen name="Cadastro"
            component={Cadastro}/>

            <Stack.Screen name="Login"
            component={Login}/>

            <Stack.Screen name="Home" 
            component={Home}/>

            
        </Stack.Navigator>
    )
}