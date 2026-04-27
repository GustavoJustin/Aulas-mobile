import { View, Text } from "react-native";

export default function PerfilAlunoExercicio4({nome, turma, matricula}) {
    return (
        <View>
            <Text>Nome: {nome}</Text>
            <Text>Turma: {turma}</Text>
            <Text>Matrícula: {matricula}</Text>
        </View>
    )
}

// app

{/* <View style={styles.container}>
    <PerfilAlunoExercicio4 nome="Celso" turma="DS-2025" matricula="00123"/>
</View> */}