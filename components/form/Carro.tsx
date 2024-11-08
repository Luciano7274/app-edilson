import React from "react";
import { TextInput, View } from "react-native";

export function Carro() {
    return(
        <View>
            <TextInput
                placeholder="vectra 2.0"
            />
            <TextInput
                placeholder="1998"
            />
        </View>
    )
}