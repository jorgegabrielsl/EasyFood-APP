import React from "react";
import Cadastro from '../pages/cadastro/';
import { createStackNavigator } from "@react-navigation/stack";

export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator>
            <Stack.Screen name="Cadastro"
            component={Cadastro}/>

            
        </Stack.Navigator>
    )
}