import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
    return <View style={styles.container}>
        <View style={styles.coluna1}><Text style={styles.textStyle}>Coluna 1</Text></View>
        <View style={styles.coluna2}><Text style={styles.textStyle}>Coluna 2</Text></View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        gap: 8,
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
    },

    coluna1: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    },

    coluna2: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center", 
    },
});