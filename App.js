import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import RegistroItem from './components/RegistroItem'
import RegistroInput from './components/RegistroInput'
import Header from './components/Header'

export default function App() {

  const [registros, setRegistros] = useState([])
  const [agregando, setAgregando] = useState(false)

  const agregarRegistro = detalles => {
    setRegistros(prevRegistros => [...prevRegistros, {
      id: Math.random().toString(),
      value: detalles
    }])
    setAgregando(false)
  }

  const eliminarRegistro = id => {
    setRegistros(prevRegistros => prevRegistros.filter(r => r.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header title="test" />
    </View>
    // <View style={styles.container}>
    //   <Button
    //     title="Agregar registro"
    //     onPress={() => setAgregando(true)}
    //   />
    //   <RegistroInput
    //     visible={agregando}
    //     agregar={agregarRegistro}
    //     cancelar={() => setAgregando(false)}
    //   />
    //   <FlatList
    //     data={registros}
    //     renderItem={itemData => (
    //       <RegistroItem
    //         item={itemData.item}
    //         eliminar={eliminarRegistro}
    //       />
    //     )}
    //   />
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
