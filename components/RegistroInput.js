import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const RegistroInput = props => {

  const [detalles, setDetalles] = useState('')

  const detallesInputHandler = texto => {
    setDetalles(texto)
  }

  const agregarHandler = () => {
    props.agregar(detalles)
    setDetalles('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="¿Por qué te sientes así?"
          style={styles.input}
          onChangeText={detallesInputHandler}
          value={detalles}
        />
        <View style={styles.contenedorBotones}>
          <View style={styles.contenedorBoton}>
            <Button
              title="Cancelar"
              color="red"
              onPress={props.cancelar}
            />
          </View>
          <View style={{ flex: 1 }} />
          <View style={styles.contenedorBoton}>
            <Button
              title="Agregar"
              onPress={agregarHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
    margin: 10,
    padding: 10,
    width: '70%'
  },
  contenedorBotones: {
    flexDirection: 'row',
    width: '70%'
  },
  contenedorBoton: {
    flex: 10
  }
})

export default RegistroInput
