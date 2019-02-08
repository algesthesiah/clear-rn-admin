import { combineReducers } from 'redux'
import demo from './demo'
import { users } from './users'
import businessAccount from './businessAccount'
import { globalDataFun } from './globalData'

export default combineReducers({
  demo,
  users,
  globalDataFun,
  businessAccount
})
