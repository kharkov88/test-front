import * as types from '../constants/ActionTypes'
import config from '../config'

const requestData = () => ({type: types.REQUEST_DATA})

const receiveData = json => ({
  type: types.RECEIVE_DATA,
  data: json
})

const requestDel = () => ({type: types.REQUEST_DEL})

const receiveDel = data => ({
  type: types.RECEIVE_DEL,
  data: data
})

const requestLogin = () => ({type: types.REQUEST_LOGIN})

const receiveLogin = json => ({
  type: types.RECEIVE_LOGIN,
  data: json
})

const requestCreate = () => ({
  type: types.REQUEST_CREATE
})
const receiveCreate = data => ({
  type: types.RECEIVE_CREATE,
  data: data
})


export const fetchData = dispatch => {
  dispatch(requestData())
  return fetch(config.api.read)
    .then(response => response.json())
    .then(json => dispatch(receiveData(json)))
}

export const deleteItem = id => dispatch => {
  dispatch(requestDel())
  let {token} = localStorage
  return fetch(config.api.destroy + id, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      "Authorization": "Bearer " + token
    }
  })
    .then(response => {
      if (response.status === 401) {
        response.flash = {message: 'You need authorization', type: 'orange'}
      } else
        response.flash = null
      return response
    })
    .then(response => {
      console.log(response)
      dispatch(receiveDel(response.flash))
    })
    .then(() => dispatch(fetchData))
    .catch(err => console.log('bad request', err))
}

export const createItem = newItem => dispatch => {
  dispatch(requestCreate())
  return fetch(config.api.create, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.token
    },
    body: JSON.stringify(newItem)
  })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(receiveCreate(json))
    })
    .then(() => dispatch(fetchData))
}

export const fetchLogin = obj => dispatch => {
  dispatch(requestLogin())
  return fetch(config.api.login, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(obj)
  })
    .then(response => response.json())
    .then(json => {
      localStorage.token = json.token
      dispatch(receiveLogin(json))
    })
}