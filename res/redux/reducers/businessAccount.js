import Immutable from 'immutable'
export const BUSINESS_ACCOUNT = 'BUSINESS_ACCOUNT'
export const businessAccount = data => ({
  type: BUSINESS_ACCOUNT,
  data
})
const initialState = Immutable.fromJS({
})

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case BUSINESS_ACCOUNT: {
      return { ...state,ceshi:'123'}
      break
    }
  }
  return state
}

