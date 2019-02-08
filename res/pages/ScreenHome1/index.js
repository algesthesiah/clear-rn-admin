import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
export default class ScreenHome extends Component {
  static navigationOptions = {
    title: '悟空数据系统'
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 36 }}>home110</Text>
        <Button
          title="goSomePage1"
          // 路由跳转
          onPress={() => {
          this.navigation.navigate('ScreenHome')}}
        />
      </View>
    )
  }
}
