import React, { Component } from 'react'
import { Button, Text, Toast } from 'native-base'
import { Form, Item, Input, Label } from 'native-base'
import { StyleSheet, Image, View } from 'react-native'
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
export default class Welcome extends Component {
  constructor(props) {
    super(props)
    this.navigation = props.navigation

    // 将需要动态更新的数据放入 state
    this.state = {
      todayOnHistoryInfo: {},
      inputMonthText: '',
      inputDayText: '',
      text: null
    }
  }
  //加载计时器
  componentDidMount() {}
  //卸载计时器
  componentWillUnmount() {
    // this.timer && clearTimeout(this.timer) //同时为真的才执行卸载
  }
  LogIn() {
    // Toast.show({
    //   text: this.state.text,
    //   buttonText: 'Okay',
    //   position: 'top'
    // })

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
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
          </Item>
          <Item floatingLabel last>
            <Label>密码</Label>
            <Input />
          </Item>
        </Form>
        <Button
          style={styles.StyledButton}
          rounded
          onPress={() => {
            this.navigation.navigate('App')
            this.LogIn()
            // AsyncStorage.setItem('userToken', '123')
            // Toast.show({
            //   text: 'Wrong password!',
            //   buttonText: 'Okay',
            //   position: 'top'
            // })
          }}
        >
          <Text>登录</Text>
        </Button>
      </View>
    )
  }
}
