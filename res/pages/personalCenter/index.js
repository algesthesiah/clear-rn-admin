import React, { Component } from 'react'
import { Image, View, Button, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { businessAccount } from '../../redux/reducers/businessAccount'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class personalCenter extends Component {
  static navigationOptions = {
    title: '个人中心',
    tabBarIcon: ({ focused }) => {
      // 根据是否选中，显示不同图片
      const act_color = focused ? '#0089ff' : '#9a9a9a'
      return <FontAwesome5 name={'user'} size={24} color={act_color} />
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
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 36 }}>第四个</Text>
      </View>
    )
  }
  componentDidMount(){
    this.props.businessAccount()
  }
}
// 将 store 中的状态映射（map）到当前组件的 props 中
function mapStateToProps(state) {
  return {  }
}

// 将 actions 中定义的方法映射到当前组件的 props 中
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ businessAccount }, dispatch)
}

// 将 store 和 当前组件连接（connect）起来
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(personalCenter)
