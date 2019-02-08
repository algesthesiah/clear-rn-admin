import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../redux/actions/demo'
// import * as actionCreators from '../../redux/reducers/globalData'
import { View, Text, Button, Image } from 'react-native'
console.log(actionCreators);
console.log('=======');
class ScreenTab2 extends Component {
  static navigationOptions = {
    title: 'Redux',
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../assets/images/tab_home_active.png')
        : require('../../assets/images/tab_home.png')
      return <Image source={icon} style={{ height: 22, width: 22 }} />
    }
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }

  changeReduxStore(userInfo) {
    // 设置 redux store
    console.log(userInfo)
    console.log('0-------')
    this.props.setUserInfo(userInfo)
  }

  render() {
    return (
      <View>
        <Text>
          我的名字是：{this.props.userInfo && this.props.userInfo.name}
        </Text>
        <Text>
          我的性别是：{this.props.userInfo && this.props.userInfo.gender}
        </Text>
        <Button
          title="改变名字"
          onPress={() => {
            console.log(this.props)
            console.log(this.dispatch)
            console.log(this.changeReduxStore)
            this.changeReduxStore({ name: 'vince' })
          }}
        />
        <Button
          title="改变性别"
          onPress={() => this.changeReduxStore({ gender: '女' })}
        />
        <Button
          title="还原"
          onPress={() => this.changeReduxStore({ name: '小光', gender: '男' })}
        />
      </View>
    )
  }
}

// 将 store 中的状态映射（map）到当前组件的 props 中
function mapStateToProps(state) {
  console.log(state)
  console.log('====>>>>><<<<<<')
  return { userInfo: state.reducers.demo.userInfo }
}

// 将 actions 中定义的方法映射到当前组件的 props 中
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

// 将 store 和 当前组件连接（connect）起来
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenTab2)
