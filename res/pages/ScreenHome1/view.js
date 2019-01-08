import React from 'react';
import { View, Button, Text } from 'react-native';

export default self => (
  <View>
    <Text style={{ fontSize: 36 }}>home110</Text>
    <Button
      title="goSomePage1"
      // 路由跳转
      onPress={() => self.navigation.navigate('ScreenHome')}
    />
  </View>
);
