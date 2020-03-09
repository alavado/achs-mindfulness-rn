import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'


const RegistroInput = props => {

  const [detalles, setDetalles] = useState('')

  const detallesInputHandler = texto => {
    setDetalles(texto)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="¿Por qué te sientes así?"
        style={styles.input}
        onChangeText={detallesInputHandler}
        value={detalles}
      />
      <Button
        title="Agregar registro"
        onPress={props.agregar.bind(this, detalles)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default RegistroInput
