import { takeLatest, takeEvery } from 'redux-saga/effects'
import { loginUserAsync } from './users'
import { USER_LOGIN } from '../actions/users'
export default function* rootSaga() {
  yield [
    takeLatest(USER_LOGIN, loginUserAsync)
    // takeEvery(CREATE_ENTRY, createEntryAsync),
  ]
}
