import { StyleSheet, Text, View} from "react-native";

export default function ScaffoldSomativa1() {
    return <View style={styles.container}>
        <View style={styles.header}><Text>Header</Text></View>
    
        <View style={styles.containerCard}>
            <View style={styles.row1}>
                <View style={styles.card1}><Text>1</Text></View>
                <View style={styles.card2}><Text>2</Text></View>
                <View style={styles.card3}><Text>3</Text></View>
            </View>
    
            <View style={styles.row2}>
                <View style={styles.main}><Text>Main</Text></View>
                <View style={styles.sideBar}><Text>Barra lateral</Text></View>
            </View>
        </View>
    
        <View style={styles.footer}><Text>Footer</Text></View>
    </View>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  header: {
    height: 50,
    width: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  }
});