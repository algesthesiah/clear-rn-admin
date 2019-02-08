import React, { Component } from 'react'
import { Button, Text, Toast } from 'native-base'
import { Form, Item, Input, Label } from 'native-base'
import { StyleSheet, Image, View } from 'react-native'
import {user_login} from '../../redux/reducers/users'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
console.log(user_login)
console.log('USER_LOGIN===========')
const styles = StyleSheet.create({
  Form: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  StyledButton: {
    alignSelf: 'center',
    marginTop: 54,
    width: 270,
    height: 40,
    textAlign: 'center',
    justifyContent: 'center'
  },
  StyledImage: {
    width: 85,
    height: 62,
    marginTop: 148
  },
  StyledImageBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
class Login extends Component {
  constructor(props) {
    super(props)
    this.navigation = props.navigation

    // 将需要动态更新的数据放入 state
    this.state = {
      mobile: null,
      password: null
    }
  }
  //加载计时器
  componentDidMount() {}
  //卸载计时器
  componentWillUnmount() {
    // this.timer && clearTimeout(this.timer) //同时为真的才执行卸载
  }
  LogIn() {
    var t = this
    if (!t.state.mobile) {
      Toast.show({
        text: '请输入账号',
        // buttonText: 'Okay',
        position: 'top'
      })
      return false
    }
    if (!t.state.password) {
      Toast.show({
        text: '请输入密码',
        // buttonText: 'Okay',
        position: 'top'
      })
      return false
    }
    var params = {
      mobile: t.state.mobile,
      password: t.state.password,
      client_type: 'mini'
    }
    console.log(2)
   this.props.user_login(params)

  // this.navigator.navigation.navigate('App')
  }
  render() {
    return (
      <View>
        <View style={styles.StyledImageBox}>
          <Image
            style={styles.StyledImage}
            source={require('../../assets/images/MOMOWOO.png')}
          />
        </View>
        <Form style={styles.Form}>
          <Item floatingLabel last>
            <Label>用户名</Label>
            <Input
              onChangeText={mobile => this.setState({ mobile })}
              value={this.state.mobile}
            />
          </Item>
          <Item floatingLabel last>
            <Label>密码</Label>
            <Input
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </Item>
        </Form>
        <Button
          style={styles.StyledButton}
          rounded
          onPress={() => {
            this.LogIn()
          }}
        >
          <Text>登录</Text>
        </Button>
      </View>
    )
  }
}

// 将 store 中的状态映射（map）到当前组件的 props 中
function mapStateToProps(state) {
  return { userInfo: state.reducers.demo.userInfo }
}

// 将 actions 中定义的方法映射到当前组件的 props 中
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ user_login }, dispatch)
}

// 将 store 和 当前组件连接（connect）起来
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
