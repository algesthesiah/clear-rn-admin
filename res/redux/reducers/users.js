import Immutable from 'immutable'
export const USER_LOGIN = 'USER_LOGIN'
export const user_login = data => ({
  type: USER_LOGIN,
  data
})
const initialState = Immutable.fromJS({
  newUser: null,
  error: null,
  saveSuccess: false,
  token: null,
  currentUser: null
})

export const users = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case USER_LOGIN: {
      return { ...state, posts: action.posts }
      break
    }
  }
  return state
}
