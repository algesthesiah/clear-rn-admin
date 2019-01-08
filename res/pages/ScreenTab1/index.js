import React, { Component } from 'react'
import { Image } from 'react-native'
import view from './view'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default class ScreenTab1 extends Component {
  static navigationOptions = {
    title: '工作台',
    tabBarIcon: ({ focused }) => {
      // 根据是否选中，显示不同图片
      const act_color = focused ? '#0089ff' : '#9a9a9a'
      return <FontAwesome5 name={'server'} size={24} color={act_color} />
    }
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation

    // 将需要动态更新的数据放入 state
    this.state = {
      todayOnHistoryInfo: {},
      inputMonthText: '',
      inputDayText: ''
    }
  }
  render() {
    return view(this)
  }
}
