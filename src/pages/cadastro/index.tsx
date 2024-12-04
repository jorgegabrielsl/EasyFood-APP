import React from "react";
import { Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import { style } from "./style";
import{MaterialIcons} from '@expo/vector-icons';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import { themas } from "../../global/themes";

export default function cadastro() {
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
               
                <Text style={style.text}>
                    Criar Conta
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
                
                <Text style={style.titleInput}>Digite seu número:</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input}
                    placeholder="Ex: (49) 99999-9999"
                    placeholderTextColor={themas.Colors.primaria}
                    />
                    <MaterialIcons
                    name="phone"
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
                <TouchableOpacity style={style.bottom}>
                    <Text style={style.textbottom}>Criar</Text>
                </TouchableOpacity>
            </View>
        </View>

)}