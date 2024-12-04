import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { style } from "./style";
import * as Imagens from "../../assets";

export default function Home() {
  const navigation = useNavigation<NavigationProp<any>>();



  const items = [
    { id: 1, name: "Hamburguer Tradicional", price: "R$ 16,00", imageUrl: Imagens.Xis},
    { id: 2, name: "Mini Salgado Calabresa", price: "R$ 2,00 (uni)", imageUrl:Imagens.Salgado },
    { id: 3, name: "Pastel de Carne", price: "R$ 8,00", imageUrl: Imagens.Pastel },
    { id: 4, name: "Porção de Batata Frita (pequena)", price: "R$ 7,00", imageUrl: Imagens.Batata},
    { id: 5, name: "Milkshake de Chocolate", price: "R$ 14,00", imageUrl: Imagens.Milkshake },
    { id: 6, name: "Quipo Framboesa 600 ml", price: "R$ 6,00", imageUrl: Imagens.Quipe},
  ];

  return (
    <View style={style.container}>
      {/* Top Section */}
      <View style={style.BoxTop}>
        <View style={style.Breturn}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} style={style.row}>
            <Ionicons name="chevron-back" size={20} color="black" />
            <Text style={style.TextReturn}>Voltar</Text>
          </TouchableOpacity>
          
        </View>
        <Text style={style.Toptitle}>OFERTAS</Text>
      </View>

      {/* Middle Section */}
      <View style={style.BoxMid}>
        {items.map((item) => (
            <View style={style.square} key={item.id}>
            <Image source={item.imageUrl} style={style.image} />
            <Text style={style.itemName}>{item.name}</Text>
            <Text style={style.price}>{item.price}</Text>
            </View>
  ))}
</View>

      {/* Bottom Section */}
      <View style={style.BoxBottom}>
        <Text style={{ color: "white" }}>Rodapé</Text>
      </View>
    </View>
  );
}
