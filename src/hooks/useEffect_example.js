import { useEffect, useState } from "react";
import { Alert, View, Text, StyleSheet, Button } from "react-native";

export default function TelaMoedas() {
    const [moedas, setMoedas] = useState(0)

    //useEffect(() => {}, []) ------> Examplo do useEffect
    useEffect(() => {
        if(moedas === 5) {
            Alert.alert("Sucesso, você desbloqueou o baú")
        }
    }, [moedas])

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Moedas coletadas: {moedas}</Text>
            <Button title="Pegar moedas" onPress={() => setMoedas((prev) => prev + 1)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },

    texto: { 
        fontSize: 24, 
        marginBottom: 20 
    },
});

