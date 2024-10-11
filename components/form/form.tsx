import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export function Form() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imc, setImc] = useState('');
    

function imcCalulator()
{
    let totalImc = (weight/(height*height)).toFixed(2)
    setImc(totalImc)

}
    function validatorImc ()
{
   if(!weight  && height !='') //*negação
    {
     imcCalulator()
     setHeight('')
     setWeight('')

   } 
}
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:</Text>
                <TextInput
                    placeholder="Ex. 1.75"
                    value={height} 
                    style={styles.formInput}
                />
                
                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput
                    placeholder="Ex. 67.5"
                    value={weight} 
                    style={styles.formInput}
                />

                <Pressable
                    onPress={() => validatorImc()}
                    style={styles.formButtom}
                >
                    <Text style={styles.formButtomText}>Calcular</Text>
                </Pressable>
                <Text style={styles.formResultadoIMC}>{imc}</Text>
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