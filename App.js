import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [detalles, setDetalles] = useState('')
  const [registros, setRegistros] = useState([])

  const detallesInputHandler = texto => {
    setDetalles(texto)
  }

  const agregarDetallesHandler = () => {
    setRegistros(prevRegistros => [...prevRegistros, detalles])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="¿Por qué te sientes así?"
          style={styles.input}
          onChangeText={detallesInputHandler}
          value={detalles}
        />
        <Button
          title="Agregar registro"
          onPress={agregarDetallesHandler}
        />
      </View>
      <View>
        {registros.map(r => <Text>{r}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32
  },
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
    margin: 10,
    padding: 10,
    width: '70%'
  }
});
