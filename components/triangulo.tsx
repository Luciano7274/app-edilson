import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export function Triangulo() {
    const [side, setSide] = useState('');
    const [area, setArea] = useState('');
    const [areaList, setareaList] = useState([]);
    
function Validatorarea()
{
    console.log(areaList);
    if (lado !== undefined) {
    let area = ((side*side*1.733) /4).toFixed(2)

    areaList.push(area) //adicionando um novo índice
    setArea(area) //imc recebe novo resultado

    setSide('')
}
}

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Lado:</Text>
                <TextInput
                    onChangeText={setSide}
                    inputMode="numeric"
                    placeholder="Ex. 10"
                    value={side} 
                    style={styles.formInput}
                />

                <Pressable
                    onPress={() => Validatorarea()}
                    style={styles.formButtom}
                >
                    <Text style={styles.formButtomText}>Calcular</Text>
                </Pressable>

                <Text style={styles.formResultadoIMC}>{area}</Text>

                <FlatList
                    data={areaList.reverse()}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <Text>{item}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30
    },
    form:{
        width: "100%",
        height: "100%",
        marginTop: 30,
        padding: 10
    },
    formLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput:{
        width: "90%",
        height: 40,
        borderRadius: 30,
        backgroundColor: "#f6f6f6",
        margin: 12,
        paddingLeft: 10,
    },
    formButtom:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30
    },
    formButtomText:{
        fontSize: 20,
        color: "#fff"
    },
    formResultadoIMC:{
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%"
    }
})