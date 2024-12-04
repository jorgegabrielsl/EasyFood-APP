import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { style } from "./style";
import Logo from "../../assets/Logo.png";
import {useNavigation, NavigationProp} from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={style.boxMid}>
                <TouchableOpacity style={[style.button, style.buttonPrimary]}
                onPress={() => navigation.navigate('Login')}
                >
                    <Text style={style.buttonTextPrimary}>Já tenho conta</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[style.button, style.buttonSecondary]}
                onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={style.buttonTextSecondary}>Criar conta</Text>
                </TouchableOpacity>
            </View>

            <View style={style.boxBottom}>

            </View>
        </View>
    );
}
