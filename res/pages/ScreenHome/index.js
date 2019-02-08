import React, { Component } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base'
export default class ScreenHome extends Component {
  static navigationOptions = {
    title: '数据分析',
    tabBarIcon: ({ focused }) => {
      // 根据是否选中，显示不同图片
      const act_color = focused ? '#0089ff' : '#9a9a9a'
      return <AntDesign name={'piechart'} size={24} color={act_color} />
    }
  }
  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }
  componentDidMount() {
    // 隐藏启动页
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 36 }}>home</Text>
        <Button onPress={() => this.navigation.navigate('ScreenHome1')}>
          <Text>goSomePage1</Text>
        </Button>
        <Button onPress={() => this.navigation.navigate('ScreenHome1')}>
          <Text>login</Text>
        </Button>
      </View>
    )
  }
}
