import { takeEvery } from 'redux-saga'
import http from '../../config/http'
import { USER_LOGIN } from '../reducers/users'
import { set_token, globalData } from '../reducers/globalData'
import NavigationService from '../../config/route/NavigationService'
export function* LogInAsync(action) {
  const response = yield http
    .post('/passport/login', action.data)
    .then(res => res.data)
  if (response) {
    var token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLXRlc3QubW9tb3dvby5jb20vcGFzc3BvcnQvbG9naW4iLCJpYXQiOjE1NDY5Mjk2NDAsImV4cCI6MTU0Nzc5MzY0MCwibmJmIjoxNTQ2OTI5NjQwLCJqdGkiOiJyUVF3Um13eGdjZFJQTktyIiwic3ViIjoyMDksInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJjb21wYW55X2lkIjoxLCJicmFuY2hfY29tcGFueV9pZCI6MH0.vH-Ucumi4rTXh5umO6EYs2Pyf7aB3ecXva8G73kc8ns'
    storage.set('token', token).then(() => {
      NavigationService.navigate('App')
    })
  }
}
export default function* watchLoGin() {
  yield takeEvery(USER_LOGIN, LogInAsync)
}
