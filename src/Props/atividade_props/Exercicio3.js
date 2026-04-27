import { View, Text } from "react-native"

export default function CartaoSaudacaoExercicio3(props) {
    return (
        <View>
            <Text>Ola, {props.nome}! Bem-vindo(a)</Text>
        </View>
    )
}

// app

{/* <View style={styles.container}>
    <CartaoSaudacaoExercicio3 nome="Daniel" />
    <CartaoSaudacaoExercicio3 nome="Marlon" />
    <CartaoSaudacaoExercicio3 nome="Celso" />
</View> */}