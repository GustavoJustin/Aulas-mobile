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
import ExercicioView02 from './Atividade/exercicio2';
import ExercicioView03 from './Atividade/exercicio3';
import ExercicioView04 from './Atividade/exercicio4';
import ExercicioView05 from './Atividade/exercicio5';
import ExercicioView06 from './Atividade/exercicio6';
import ExercicioView07 from './Atividade/exercicio7';
import ExercicioView08 from './Atividade/exercicio8';
import ExercicioView09 from './Atividade/exercicio9';
import ExercicioView10 from './Atividade/exercicio10';

//-------------------------------------------------------------------------------------

import ExercicioSomativa1 from './somativa_1_mobile/Exercicio_1';
import ExercicioSomativa2 from './somativa_1_mobile/Exercicio_2';

//-------------------------------------------------------------------------------------

import CartaoPerfil from './Props/ex_componente';

//-------------------------------------------------------------------------------------

import CardProdutoExercicio1 from './Props/atividade_props/Exercicio1.js';
import CartaoUsuarioExercicio2 from './Props/atividade_props/Exercicio2.js';
import CartaoSaudacaoExercicio3 from './Props/atividade_props/Exercicio3.js';
import PerfilAlunoExercicio4 from './Props/atividade_props/Exercicio4.js';
import BotaoDesafio from './Props/atividade_props/Desafio.js';

//-------------------------------------------------------------------------------------

import ContadorExample from './hooks/useState_example.js';
import TelaDeLogin from './hooks/useRef_example.js';
import TelaMoedas from './hooks/useEffect_example.js';

//-------------------------------------------------------------------------------------

import Recados from './hooks/atividade_hooks/Exercicio_1.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Recados />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});