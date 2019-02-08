import React from 'react'
import './res/utils/storage'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './App'
import { name as appName } from './app.json'
import configureStore from './res/redux/store'
const { persistor, store } = configureStore()
import { PersistGate } from 'redux-persist/es/integration/react'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Remote debugger'])
const ReduxApp = () => (
  // 配置 Provider 为根组件，同时传入 store 作为其属性
  <Provider store={store}>
    {/* redux 持久化存储 */}
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp)
