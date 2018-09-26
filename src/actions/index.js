import * as types from '../constants/ActionTypes'
import config from '../config'

const requestData = () => ({type: types.REQUEST_DATA});

const receiveData = (collection, json) => ({
  type: types.RECEIVE_DATA,
  collection: collection,
  data: json
});

const requestDel = () => ({type: types.REQUEST_DEL});

const receiveDel = data => ({
  type: types.RECEIVE_DEL,
  data: data
});

const requestLogin = () => ({type: types.REQUEST_LOGIN});

const receiveLogin = json => ({
  type: types.RECEIVE_LOGIN,
  data: json
});

const requestCreate = () => ({
  type: types.REQUEST_CREATE
});
const receiveCreate = data => ({
  type: types.RECEIVE_CREATE,
  data: data
});
export const clearFlash = () => ({type: types.CLEAR_FLASH})

export const fetchData = collection => dispatch => {
  dispatch(requestData());
  return fetch(config.api.read[collection])
    .then(response => response.json())
    .then(json => dispatch(receiveData(collection, json)))
};

export const deleteItem = id => dispatch => {
  dispatch(requestDel());
  let {token} = localStorage;
  return fetch(config.api.destroy + id, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      "Authorization": "Bearer " + token
    }
  })
    .then(response => response.json())
    .then(json => dispatch(receiveDel(json)))
    .then(() => dispatch(fetchData(config.employees)))
    .catch(err => console.log('bad request', err))
};

export const createItem = newItem => dispatch => {
  dispatch(requestCreate());
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
      console.log(json);
      dispatch(receiveCreate(json))
    })
    .then(() => dispatch(fetchData(config.employees)))
};

export const fetchLogin = obj => dispatch => {
  dispatch(requestLogin());
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
      json.token && (localStorage.token = json.token);
      dispatch(receiveLogin(json))
    })
};