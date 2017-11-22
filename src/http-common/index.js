import axios from 'axios'
import store from '../vuex/store'

export const API_ENDPOINT = 'http://localhost:8000/'
export const HTTP = axios.create({
  baseURL: `http://localhost:8000/`,
  headers: {
    Authorization: 'SFT '
  }
})

// request interceptor
HTTP.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.Authorization = config.headers.Authorization + localStorage.getItem('token')
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// response interceptor
HTTP.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  let status = error.response.status
  if (status === 403 || status === 401) {
    store.commit('LOGOUT_USER')
  }
  return Promise.reject(error)
})
