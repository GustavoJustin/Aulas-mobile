import { StyleSheet, Text, View} from "react-native";

export default function ExercicioSomativa1() {
    return <View style={styles.container}>
        <View style={styles.topo}>
            <View style={styles.coluna1}><Text style={styles.text}>Amarelo</Text></View>
            <View style={styles.coluna2}><Text style={styles.text}>Azul escuro</Text></View>
        </View>

        <View style={styles.central}>
            <View style={styles.esquerda}><Text style={styles.text}>Verde</Text></View>
            <View style={styles.direita}>
                <View style={styles.colunaCentral1}><Text style={styles.text}>Rosa</Text></View>
                <View style={styles.colunaCentral2}><Text style={styles.text}>Laranja</Text></View>
            </View>
        </View>

        <View style={styles.fundo}>
            <View style={styles.vermelho}><Text style={styles.text}>Vermelho</Text></View>
            <View style={styles.teal}><Text style={styles.text}>Teal</Text></View>
            <View style={styles.roxo}><Text style={styles.text}>Roxo</Text></View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
        fontWeight: "bold"
    },

    container: {
        gap: 8,
        flex: 1,
        padding: 8
    },

// ---------------------------------------------------------

    topo: {
        width: "100%",
        flexDirection: "row",
        height: 100,
        gap: 8,
    },

    coluna1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#efc107",
        borderRadius: 8
    },

    coluna2: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00087a",
        borderRadius: 8
    },

// ---------------------------------------------------------

    central: {
        flex: 1,
        flexDirection: "row",
        gap: 8,
    },

    esquerda: {
        flex: 1,
        backgroundColor: "#177100",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },

    direita: {
        flex: 1,
        flexDirection: "column",
        gap: 8,
    },

    colunaCentral1: {
        flex: 1,
        backgroundColor: "#c20078",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },

    colunaCentral2: {
        flex: 1,
        backgroundColor: "#e05002",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },

// ---------------------------------------------------------

    fundo: {
        height: 90,
        width: "100%",
        flexDirection: "row",
        gap: 8
    },

    vermelho: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b90000",
        borderRadius: 8
    },

    teal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00835e",
        borderRadius: 8
    },

    roxo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#56006e",
        borderRadius: 8
    }
});