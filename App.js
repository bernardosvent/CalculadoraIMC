import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Appbar, PaperProvider, TextInput } from 'react-native-paper';

export default function App() {

  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState();
  const calcular = () => {

    if (!altura && !peso) {
      alert('Informe os dados')
      return;
    }
    const floatAltura = parseFloat(altura);
    const floatPeso = parseFloat(peso);

    const imc = floatPeso / (floatAltura * floatAltura);
    setResultado(imc.toFixed(2));
  }

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="CalculadoraIMC" />
      </Appbar.Header>
      <TextInput
        placeholder='Altura'
        keyboardType='decimal-pad'
        onChangeText={text => setAltura(text)} />
      <TextInput
        placeholder='Peso'
        keyboardType='decimal-pad'
        onChangeText={text => setPeso(text)} />
      <Button
        mode='contained'
        icon={'calculator'}
        onPress={calcular()}
      > CALCULAR IMC </Button>
    </PaperProvider >
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
