
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Disciplina from './components/Disciplina';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';

//import Hello from './src/hello/Hello';
const foto = {uri:'	https://avatars.githubusercontent.com/u/29978171?s=400&v=4'}

export default function App() {
  return (
    <View style={styles.container}>
       <Cabecalho
       nome ='Juliana Barreto'
       curso='Design Digital'
       ></Cabecalho>
       <Corpo/>
       <Disciplina disciplina='Projeto Integrado IV'/>
       <Disciplina disciplina='Ergonomia'/>
       <Disciplina disciplina ='Tipografia'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
