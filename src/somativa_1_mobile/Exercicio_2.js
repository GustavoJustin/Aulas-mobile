import { StyleSheet, Text, View} from "react-native";

export default function ExercicioSomativa2() {
    return <View style={styles.container}>
        <View style={styles.header}><Text style={styles.text}>Header</Text></View>

        <View style={styles.corpo}>
            <View style={styles.sidebar}><Text style={styles.text}>Side</Text></View>

            <View style={styles.mainArea}>
                <View style={styles.superior}>
                    <View style={styles.cardsSu1}><Text style={styles.text}>Verde</Text></View>
                    <View style={styles.cardsSu2}><Text style={styles.text}>Azul</Text></View>
                </View>

                <View style={styles.divisor}></View>

                <View style={styles.inferior}>
                    <View style={styles.cardsIn1}><Text style={styles.text}>Verm.</Text></View>
                    <View style={styles.cardsIn2}><Text style={styles.text}>Laranja</Text></View>
                    <View style={styles.cardsIn3}><Text style={styles.text}>Roxo</Text></View>
                </View>
            </View>
        </View>
        
        <View style={styles.footer}><Text style={styles.text}>Footer</Text></View>
    </View>;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        padding: 8,
        backgroundColor: "#000000"
    },

    text: {
        color: "white",
        fontWeight: "bold",
    },

// ---------------------------------------------------------

    header: {
        height: 90,
        backgroundColor: "#2c3e50",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4
    },

    corpo: {
        flex: 1,
        flexDirection: "row",
        gap: 8
    },

// ---------------------------------------------------------

    sidebar: {
        width: 80,
        backgroundColor: "#95a5a6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },

    mainArea: {
        flex: 1,
        flexDirection: "column",
        gap: 8
    }, 

    superior: {
        flex: 1,
        gap: 8,
        flexDirection: "row"
    },

    cardsSu1: {
        flex: 1,
        backgroundColor: "#009616",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },

    cardsSu2: {
        flex: 1,
        backgroundColor: "#0055cc",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },

// ------------------------

    divisor: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#34495e",
        alignSelf: "center"
    },


// ------------------------

    inferior: {
        flex: 1,
        gap: 8,
        flexDirection: "row"
    },

    cardsIn1: {
        flex: 1,
        backgroundColor: "#af0000",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },

    cardsIn2: {
        flex: 2,
        backgroundColor: "#dd6700",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },

    cardsIn3: {
        flex: 1,
        backgroundColor: "#7000a8",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },

// ---------------------------------------------------------

    footer: {
        height: 50,
        backgroundColor: "#2c3e50",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    }
});