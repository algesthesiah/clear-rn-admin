import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base'
export default self => (
  <View>
    <Text style={{ fontSize: 36 }}>home</Text>
    <Button onPress={() => self.navigation.navigate('ScreenHome1')}>
      <Text>goSomePage1</Text>
    </Button>
    <Button onPress={() => self.navigation.navigate('ScreenHome1')}>
      <Text>login</Text>
    </Button>
  </View>
)
