import React from "react";
import { Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import { style } from "./style";
import{MaterialIcons} from '@expo/vector-icons';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import { themas } from "../../global/themes";


export default function cadastro() {

    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
               
                <Text style={style.text}>
                    Faça Login
                </Text>
               
            </View>

            <View style={style.boxMid}>
               <Text style={style.titleInput}>Digite seu e-mail:</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input}
                    placeholder="exemplo@unochapeco.edu.br"
                    placeholderTextColor={themas.Colors.primaria}/>
                    <MaterialIcons
                    name="email"
                    size={30}
                    color={'gray'}/>
                </View>
                
                <Text style={style.titleInput}>Digite sua senha:</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input}
                    secureTextEntry
                    placeholderTextColor={themas.Colors.primaria}/>
                    <MaterialIcons
                    name="remove-red-eye"
                    size={30}
                    color={'gray'}/>
                </View>
                
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.bottom}
                onPress={() => navigation.navigate('Home')}
                >
                    <Text style={style.textbottom}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.bottom,style.whiteButton]}>
                    <Text style={[style.textbottom,style.textblack]}>Esqueci Senha</Text>
                </TouchableOpacity>
                
            </View>
        </View>

)}