import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const RegistroItem = props => {
  return (
    <TouchableOpacity onPress={() => props.eliminar(props.item.id)}>
      <View style={styles.listItem}>
        <Text>{props.item.value}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: '#cecece'
  }
})

export default RegistroItem
