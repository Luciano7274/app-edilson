import React from "react";
import { TextInput, View } from "react-native";

export function Login() {
    return(
        <View>
            <TextInput
                placeholder="Email"
            />
            <TextInput
                placeholder="Senha"
            />
        </View>
    )
}