import axios from 'axios'
import config from '@/configs/app.base'
import authService from '@/domain/auth-services'

const httpAuth = axios.create({
  baseURL: config.baseApiUrl,
  //  Add header config
  headers: {
    // 'Content-Type': 'application/json;charset=UTF-8',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // 'Access-Control-Allow-Headers': ''
    Accept: 'application/json'
    // Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})

httpAuth.interceptors.request.use((config) => {
  config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')

  return config
})

httpAuth.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    let code = parseInt(error.response && error.response.status)

    if (code === 401) {
      console.log('Unauthorzied')
      return authService.unauthorized()
    }
    if (code === 403) {
      console.log('Page 403')
      return authService.access_denied()
    }
    if (code === 402) {
      console.log(error.data)
    }
    return Promise.reject(error)
  }
)

export default httpAuth
