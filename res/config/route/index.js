import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
// 引入页面组件
import NavigationService from './NavigationService'
import ScreenHome from '../../pages/ScreenHome'
import ScreenBottomTab from '../../pages/ScreenBottomTab'
import ScreenHome1 from '../../pages/ScreenHome1'
import ScreenTab1 from '../../pages/ScreenTab1'
import ScreenTab2 from '../../pages/ScreenTab2'
import personalCenter from '../../pages/ScreenTab1'
import Login from '../../pages/Login'
import LoginModal from '../../pages/Login/LoginModal'
import AuthLoading from '../../pages/AuthLoading'

// 配置路由
const MODAL_DEFAULT_OPTIONS = {
  mode: 'modal',
  headerMode: 'none'
}
const App = createStackNavigator({
  ScreenBottomTab,
  ScreenHome,
  ScreenHome1: {
    screen: ScreenHome1
  },
  ScreenTab1: {
    screen: ScreenTab1
  },
  ScreenTab2: {
    screen: ScreenTab2
  },
  personalCenter: {
    screen: personalCenter
  }
})

const Auth = createStackNavigator(
  {
    Login,
    LoginModal
  },
  { ...MODAL_DEFAULT_OPTIONS }
)

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    App,
    Auth
  })
)
export default () => (
  <AppContainer
    ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef)
    }}
  />
)

// @connect(({ router }) => ({ router }))
// export default class Router extends Component {
//   render () {
//     const { dispatch, router } = this.props
//     const navigation = addNavigationHelpers({ dispatch, state: router })
//     return <App navigation={navigation} />
//   }
// }

// export function routerReducer (state, action = {}) {
//   return App.router.getStateForAction(action, state)
// }
