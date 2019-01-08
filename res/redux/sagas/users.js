import { select, put, call } from 'redux-saga/effects';
// import { getAuth } from './selectors';
// import {
//   loginSuccessAction, loginFailureAction,
// } from '../actions/users';
// import { login } from '../api/users';

export function* loginUserAsync () {
  console.log(123213)
  // const auth = yield select(getAuth);
  // const user = auth.get('user');

  // const json = yield call(login.bind(this, user), 'login');
  // if (json.success) {
    // localStorage.setItem('token', json.data);
    // yield put(loginSuccessAction(json.data));
  // } else {
    // yield put(loginFailureAction(json.error));
  // }
}