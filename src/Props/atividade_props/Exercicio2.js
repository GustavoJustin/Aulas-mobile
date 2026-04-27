import { View, Text } from "react-native"

export default function CartaoUsuarioExercicio2({ nome, email }) {
    return <Text>{nome} - {email}</Text>
}

// app

{/* <View style={styles.container}>
    <CartaoUsuarioExercicio2 nome="Daniel" email="daniel.filho@gmail.com" />
</View> */}