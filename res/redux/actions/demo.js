export const SET_USER_INFO = 'SET_USER_INFO'
export const CLEAR_REDUX_STORE = 'CLEAR_REDUX_STORE'
export const setUserInfo = userInfo => ({
  type: SET_USER_INFO,
  userInfo
})

export const clearReduxStore = () => ({
  type: CLEAR_REDUX_STORE
})
