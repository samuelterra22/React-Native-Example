import React, { Component } from 'react'

import { View, Text } from 'react-native'

export default class Main extends Component {
  static navigationOptions = {
    title: "JSHunt"
  }
  // Método obrigatório
  render() {
    return (
      <View>
        <Text>Main Page.</Text>
      </View>
    )
  }
}