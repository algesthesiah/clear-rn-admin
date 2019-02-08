import Immutable from 'immutable'
const initialState = Immutable.fromJS({
  token: null
})
export const SET_TOKEN = 'SET_TOKEN'
export const set_token = data => ({
  type: SET_TOKEN,
  data
})
export const globalData = () => initialState
export const globalDataFun = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_TOKEN':
      action.token = Object.assign({}, state.token, action.token)
      return Object.assign({}, state, { token: action.token })
    default:
      return state
  }
}
