import config from '@/configs/app.base'
import http from '@/infrastructures/api-http'
import httpAuth from '@/infrastructures/api-http-auth'

export default {
  register(data) {
    return http.post(config.baseApiUrl + '/register', data)
  },
  getAllPost() {
    return httpAuth.get(config.baseApiUrl + '/post')
  },
  getPostById(id) {
    return httpAuth.get(config.baseApiUrl + `/post/${id}`)
  },
  getAllMessage() {
    return httpAuth.get(config.baseApiUrl + '/message')
  },
  addParticipant(data) {
    return httpAuth.post(config.baseApiUrl + '/message/room/participant', data)
  },
  getAllParticipant(roomId) {
    return httpAuth.get(config.baseApiUrl + `/message/room/${roomId}/participant`)
  },
  getMessageNearest() {
    return httpAuth.get(config.baseApiUrl + '/message/inbox')
  }
}
