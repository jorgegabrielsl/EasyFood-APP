import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: themas.Colors.fundo,
  },

  BoxTop: {
    height: Dimensions.get("window").height / 8, // Altura reduzida
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  BoxMid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginTop: 10,
  },

  BoxBottom: {
    height: 60, // Altura fixa reduzida
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  Breturn: {
    position: "absolute",
    left: 10,
    top: 25,
    flexDirection: "row",
    alignItems: "center",
  },

  row: {
    flexDirection: "row", 
    alignItems: "center",
  },

  TextReturn: {
    fontSize: 14, // Texto menor
    color: "#000",
    marginLeft: 5,
  },

  Toptitle: {
    fontSize: 30,
    marginTop:20, // Título menor
    fontWeight: "bold",
    color: themas.Colors.preto,
    textAlign: "center",
  },

  square: {
    width: "48%", // Quadrado menor
    backgroundColor: "#FFF",
    marginBottom: 10,
    alignItems: "center",
    padding: 8, // Reduzindo padding
    borderRadius: 8,
  },

  image: {
    width: 80, // Imagem menor
    height: 80,
    borderRadius: 8,
  },

  itemName: {
    fontSize: 14, // Fonte menor para o nome
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },

  price: {
    fontSize: 12, // Fonte menor para o preço
    color: "gray",
    textAlign: "center",
  },
});
