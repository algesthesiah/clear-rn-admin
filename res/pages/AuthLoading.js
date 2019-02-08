import React from 'react'
import { ActivityIndicator, StatusBar, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import storage from '../utils/storage'
export default class AuthLoadingScreen extends React.Component {
  constructor() {
    super()
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    var t = this
    var token = await storage.get('token')
    t.props.navigation.navigate(token ? 'App' : 'Auth')
  }
  componentWillMount() {
    // this._bootstrapAsync()
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
