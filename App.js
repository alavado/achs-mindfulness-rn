import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native'
import RegistroItem from './components/RegistroItem'
import RegistroInput from './components/RegistroInput'

export default function App() {

  const [registros, setRegistros] = useState([])

  const agregarRegistro = detalles => {
    setRegistros(prevRegistros => [...prevRegistros, {
      key: Math.random().toString(),
      value: detalles
    }])
  }

  return (
    <View style={styles.container}>
      <RegistroInput agregar={agregarRegistro} />
      <FlatList
        data={registros}
        renderItem={itemData => <RegistroItem titulo={itemData.item.value} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 32
  }
})
