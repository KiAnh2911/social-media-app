import config from '@/configs/app.base'
import http from '@/infrastructures/api-http'

export default {
  login(email, password) {
    return http.post(config.baseApiUrl + '/login', { email: email, password: password })
  },
  logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('isAuth')
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
