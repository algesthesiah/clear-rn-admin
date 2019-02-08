import { takeEvery } from 'redux-saga'
import http from '../../config/http'
import { BUSINESS_ACCOUNT } from '../reducers/businessAccount'
export function* getBusinessAccount(action) {
  const response = yield http
    .get('/company/accounts/detail')
    .then(res => res.data)
  if (response) {
    console.log(response);
    console.log('最新');
  }
}
export default function* watchBusinessAccount() {
  yield takeEvery(BUSINESS_ACCOUNT, getBusinessAccount)
}
