// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo04() {
    const frutas =["Laranja", "Acerola", "Abacaxi"];

    const alunos = [
        {id: 1, nome: "Marlon", nota: 8},
        {id: 2, nome: "Daniel", nota: 10},
        {id: 3, nome: "Celso", nota: 7},
    ];

    return (
        // Abertura do container
        <View style={styles.container}>
            <Text style={styles.titulo}>Listas e Map</Text> {/* Lista para mostrar elementos de uma lista, em ordem */}
            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}>Map Comum</Text>

                {frutas.map((fruta, index) => (
                    <Text key={index}>
                        {index + 1} - {fruta}
                    </Text>
                ))}
            </View>

            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}>Map em Objetos</Text> {/* Lista que mostra elementos de listas diferentes */}

                {alunos.map((aluno) => (
                    <Text key={aluno.id}>
                        {aluno.nome} - {aluno.nota}
                    </Text>
                ))}
            </View>

            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}>Map com Filter</Text> {/* Lista que mostra apenas quem tirou mais de 7 */}
                
                {alunos.filter((aluno) => aluno.nota >= 7).map((aluno) => (
                    <Text key={aluno.id}>
                        Aprovado: {aluno.nome} - {aluno.nota}
                    </Text>
                ))}  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
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
    backgroundColor: "#cb2727",
    borderRadius: 8,
  },
});