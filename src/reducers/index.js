import {
  REQUEST_DATA,
  RECEIVE_DATA,
  REQUEST_DEL,
  RECEIVE_DEL, REQUEST_CREATE, RECEIVE_CREATE,
  REQUEST_LOGIN, RECEIVE_LOGIN
} from '../constants/ActionTypes'

const initialState = {
  data: [],
  flash: null,
  isFetching: false
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    case REQUEST_DEL:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_DEL:
      return Object.assign({}, state, {
        isFetching: false,
        flash: action.data
      })
    case REQUEST_CREATE:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_CREATE:
      let {message} = action.data
      return Object.assign({}, state, {
        isFetching: false,
        flash: message ? {
          message: message,
          type: 'orange'
        } : null
      })
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_LOGIN:
      let {info, user} = action.data
      return Object.assign({}, state, {
        isFetching: false,
        loginAnswer: action.data,
        flash: {
          message: info.message,
          type: user ? 'green' : 'orange'
        }
      })
    default:
      return state
  }
}