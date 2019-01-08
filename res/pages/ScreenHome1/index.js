import React, { Component } from 'react'

import view from './view'

export default class ScreenHome extends Component {
  static navigationOptions = {
    title: '悟空数据系统'
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }
  render() {
    return view(this)
  }
}
