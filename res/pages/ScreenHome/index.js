import React, { Component } from 'react'
import { Image } from 'react-native'
import view from './view'
import AntDesign from 'react-native-vector-icons/AntDesign'

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
    return view(this)
  }
}
