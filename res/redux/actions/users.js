export const USER_LOGIN = 'USER_LOGIN'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const loginAction = user => {
  return {
    type: LOGIN_USER,
    data: user
  }
}
export const loginSuccessAction = token => {
  return {
    type: LOGIN_USER_SUCCESS,
    data: token
  }
}

export const loginFailureAction = error => {
  return {
    type: LOGIN_USER_FAILURE,
    data: error
  }
}
