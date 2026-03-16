import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return <View style={styles.container}>
    <View style={{flexDirection: "column", width: "100%", height: "100%"}}>
        <View style={styles.header}><Text style={styles.textStyle}>Header</Text></View>
        <View style={styles.main}><Text style={styles.textStyle}>Main Content</Text></View>
        <View style={styles.footer}><Text style={styles.textStyle}>Footer</Text></View>
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

  header: {
    backgroundColor: "green",
    height: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  main: {
    backgroundColor: "gray",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  footer: {
    backgroundColor: "blue",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
});