import { createBottomTabNavigator } from 'react-navigation'
import ScreenHome from '../ScreenHome'
import ScreenTab1 from '../ScreenTab1'
import ScreenTab2 from '../ScreenTab2'
import personalCenter from '../personalCenter'

const ScreenTab = createBottomTabNavigator(
  {
    ScreenHome: {
      screen: ScreenHome
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
  },
  {
    tabBarPosition: 'bottom'
  }
)

export default ScreenTab
