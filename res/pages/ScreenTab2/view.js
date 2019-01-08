import React from 'react'
import { View, Text, Button } from 'react-native'
import pxToDp from '../../utils/pxToDp'
export default t => (
  <View>
    <Text style={{ fontSize: pxToDp(36) }}>
      我的名字是：{t.props.userInfo.name}
    </Text>
    <Text style={{ fontSize: pxToDp(36) }}>
      我的性别是：{t.props.userInfo.gender}
    </Text>
    <Button
      title="改变名字"
      onPress={() => {
        console.log(t)
        console.log(t.dispatch)
        console.log(t.changeReduxStore)
        t.changeReduxStore({ name: 'vince' })
      }}
    />
    <Button
      title="改变性别"
      onPress={() => t.changeReduxStore({ gender: '女' })}
    />
    <Button
      title="还原"
      onPress={() => t.changeReduxStore({ name: '小光', gender: '男' })}
    />
  </View>
)
