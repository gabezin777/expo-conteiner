import React from "react";
import { Image } from "react-native";
import fotos from '../img/Fotos';
import estilos from '../style/style';

export default function FotoPerfil({ img = 'perfil00' }) {
    return (
        <Image
            source={fotos[img]}
            style={estilos.foto}
        />
    );
}
