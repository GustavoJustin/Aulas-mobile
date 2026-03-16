import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView04() {
  return <View style={styles.container}>
    <View style={{flexDirection: "column", flex: 1, width: 300, heigth: 300, justifyContent: "center", alignItems: "center"}}>
        <View style={styles.centerBox}><Text style={styles.textStyle}>Center</Text></View>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  
  centerBox: {
    height: 120,
    width: 120,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  }
});