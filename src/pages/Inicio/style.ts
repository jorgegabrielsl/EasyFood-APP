import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: themas.Colors.fundo, // Cor bege clara como no design
    },

    boxTop: {
        flex:1,
        paddingTop: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxMid: {
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', // Espaço igual entre botões
        paddingTop: 200,
    },

    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 300,
        height: 300,
    },

    button: {
        width: '80%',
        height: 60,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:10,
        shadowColor:themas.Colors.preto,
        shadowOffset:{
            width:0,
            height:0,
        },
        shadowOpacity:0.29,
        shadowRadius:4.65,
        elevation:7,
    },

    buttonPrimary: {
        backgroundColor: themas.Colors.primaria, // Cor do botão "Já tenho conta"
    },

    buttonSecondary: {
        backgroundColor: themas.Colors.branco, 
        borderWidth: 1,
        borderColor: themas.Colors.branco,
     
    },

    buttonTextPrimary: {
        color: themas.Colors.branco,
        fontSize: 25,
        fontWeight: 'bold',
    },

    buttonTextSecondary: {
        color: themas.Colors.preto,
        fontSize:25,
        fontWeight: 'bold',
    },
});
