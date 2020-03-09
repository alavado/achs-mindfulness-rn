import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RegistroItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.titulo}</Text>
    </View>
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
