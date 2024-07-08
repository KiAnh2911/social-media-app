import config from '@/configs/app.base'
import http from '@/infrastructures/api-http'

export default {
  register(data) {
    return http.post(config.baseApiUrl + '/register', data)
  },
  login(email, password) {
    return http.post(config.baseApiUrl + '/login', { email: email, password: password })
  },
  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('isAuth')
    localStorage.removeItem('user')
    window.location = config.baseUrl + '/login'
  },
  access_denied() {
    window.location = config.baseUrl + '/error/403'
  },
  unauthorized() {
    this.logout()
  },
  getAccessToken(data) {
    return data
  }
}
