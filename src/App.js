import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo01 from './jsx_examples/exemplo-01-estrutura';
import Exemplo02 from './jsx_examples/exemplo-02-expressoes';
import Exemplo03 from './jsx_examples/exemplo-03-condicionais';
import Exemplo04 from './jsx_examples/exemplo-04-listas';

//------------------------------------------------------------------------------------

import Lista01 from './jsx_listas/Lista01';
import Lista02 from './jsx_listas/Lista02';
import Lista03 from './jsx_listas/Lista03';

//-------------------------------------------------------------------------------------

import ViewExamples1 from './jsx_flexbox_examples/flex_direction';
import ViewExamples2 from './jsx_flexbox_examples/justify_content';
import ViewExamples3 from './jsx_flexbox_examples/flex';
import ViewExamples4 from './jsx_flexbox_examples/flex_wrap';

//-------------------------------------------------------------------------------------

import ExercicioView01 from './Atividade/exercicio1';
import ExercicioView02 from './Atividade/Exercicio2';
import ExercicioView03 from './Atividade/Exercicio3';
import ExercicioView04 from './Atividade/Exercicio4';
import ExercicioView05 from './Atividade/Exercicio5';
import ExercicioView06 from './Atividade/Exercicio6';
import ExercicioView07 from './Atividade/Exercicio7';
import ExercicioView08 from './Atividade/Exercicio8';
import ExercicioView09 from './Atividade/Exercicio9';
import ExercicioView10 from './Atividade/Exercicio10';

//-------------------------------------------------------------------------------------

export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView10 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
