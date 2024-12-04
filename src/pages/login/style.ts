import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.Colors.fundo,
    },

    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxMid: {
        height: Dimensions.get('window').height / 2,
        width: '100%',
        paddingHorizontal: 37,
        justifyContent: 'center',
    },

    boxBottom: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap:10,
        paddingBottom:60,
    },

    text: {
        fontWeight: 'bold',
        marginTop: 30,
        fontSize: 50,
        fontFamily: 'LeagueSpartan-VariableFont_wght',
    },

    titleInput: {
        marginLeft: 5,
        fontSize: 25,
        marginTop: 10,
        fontWeight:'bold',
    },

    boxInput: {
        width: '100%',
        height: 60,
        borderWidth: 2,
        borderRadius: 40,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: themas.Colors.primaria,
        
    },

    input: {
        flex: 1, // Ajusta o input para ocupar o espaço disponível
        height: '100%',
        paddingHorizontal: 10,
        fontSize: 16,
    },

    bottom: {
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.Colors.primaria,
        borderRadius: 25,
        marginRight:10,
        shadowColor:themas.Colors.preto,
        shadowOffset:{
            width:0,
            height:0,
        },
        shadowOpacity:0.29,
        shadowRadius:4.65,
        elevation:7,
    },
    textbottom:{
        fontSize:20,
        fontWeight:'bold',
        color:themas.Colors.branco,

    },

    whiteButton: {
    backgroundColor: themas.Colors.branco,
    borderWidth: 2,
    borderColor: themas.Colors.branco,
    color:themas.Colors.preto
    
},
    textblack:{
        color:themas.Colors.preto,
    }
});
