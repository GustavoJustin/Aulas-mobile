import { View, Text } from "react-native"

export default function CardProdutoExercicio1(props) {
    return (
        <View>
            <Text>Produto: {props.produto} </Text>
            <Text>Preco: R$ {props.preco} </Text>
        </View>
    )
}

// app

{/* <View style={styles.container}>
    <CardProdutoExercicio1 produto="maca" preco={19} />
</View> */}