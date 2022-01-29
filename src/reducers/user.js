import { SET_USER } from '../actions/user'

const initialState = {}

const userReducer = (state = initialState, { type, user }) => {
  switch (type) {
    case SET_USER:
      return { ...user }
    default:
      return state
  }
}

export default userReducer
