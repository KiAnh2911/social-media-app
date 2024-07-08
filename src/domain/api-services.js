import config from '@/configs/app.base'
import httpAuth from '@/infrastructures/api-http-auth'

export default {
  jwtToken() {
    console.log(httpAuth)
    return httpAuth.get(config.baseApiUrl + '/jwt')
  },
  getAllPost() {
    return httpAuth.get(config.baseApiUrl + '/posts')
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
