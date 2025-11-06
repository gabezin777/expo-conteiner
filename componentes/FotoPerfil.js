import React from "react";
import {image} from "react-native";

export default function FotoPerfil (){
    return(
        <image
            source={('../img/base.jpg')}
            style={{ width: 100, height: 100, borderRadius:50, marginBottom: 10}}
            />
    )
}
