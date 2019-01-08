import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Component } from 'react'

export default class ScreenSome2 extends Component {
  static navigationOptions = {
    title: 'modal'
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => this.navigation.goBack()}
          underlayColor="transparent"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 30,
            width: 150,
            height: 90,
            backgroundColor: 'yellow'
          }}
        >
          <Text style={{ marginLeft: 24 }}>关闭</Text>
        </TouchableHighlight>
        <Text style={{ fontSize: 36 }}>some2，以 modal 的形式进入</Text>
      </View>
    )
  }
}
