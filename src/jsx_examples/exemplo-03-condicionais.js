// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo03() {
    const logado = true;
    const temNotificacao = true;

  return (
    <View style={styles.container}>
      <View style={styles.exemplo}>
        //exemplo
        <Text style={styles.titulo}>Condicionais</Text>
        <Text style={styles.subtitulo}>Ternário</Text>
        <Text>Status: {logado ? "Logado" : "Deslogado"}</Text>
      </View>

      <View style={styles.exemplo}>
        //exemplo
        <Text style={styles.subtitulo}>Condicionais com &&</Text>
        <Text>Notificações:</Text>
        {temNotificacao && <Text>Você tem novas notificações</Text>}
        {!temNotificacao && <Text>Você não tem novas notificações</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#bdbdc0",
    borderRadius: 8,
  },
});