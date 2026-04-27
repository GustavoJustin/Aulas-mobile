import {View, Text, TouchableOpacity, StyleSheet} from "react-native"

export default function BotaoDesafio(props) {
    return (
        <TouchableOpacity style={styles.botao}>
            <Text>{props.titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

// app

{/* <View style={styles.container}>
    <BotaoDesafio titulo= "Entrar" />
    <BotaoDesafio titulo= "Sair" />
    <BotaoDesafio titulo= "Cadastrar" />
</View> */}