import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';

const gerarNumeroAleatorio = () => {
  let numero_aleatorio = Math.random();

  numero_aleatorio *= 10;
  //numero_aleatorio = Math.floor(numero_aleatorio)
  numero_aleatorio = parseInt(numero_aleatorio);
  alert(numero_aleatorio);
};

export default class app1 extends Component {
  render() {
    return (
      <View>
        <Text>Gerador de números randômicos!!!</Text>
        <Button 
          title='Gerar um número randômico'
          onPress={gerarNumeroAleatorio}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('app1', () => app1);
