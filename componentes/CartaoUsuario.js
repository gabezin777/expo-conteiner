import React from "react";
import { View, Text } from "react-native";
import estilos from '../style/style';

export default function CartaoUsuario({ nome, descricao }) {
    return (
        <View style={estilos.cartao}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
        </View>
    );
}





