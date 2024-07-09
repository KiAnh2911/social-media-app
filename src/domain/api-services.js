import config from '@/configs/app.base'
import httpAuth from '@/infrastructures/api-http-auth'

export default {
  jwtToken() {
    console.log(httpAuth)
    return httpAuth.get(config.baseApiUrl + '/jwt')
  },
  getProfile(id) {
    return httpAuth.get(config.baseApiUrl + `/user/${id}`)
  },
  editProfile(data) {
    return httpAuth.put(config.baseApiUrl + '/user', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
  getAllPost() {
    return httpAuth.get(config.baseApiUrl + '/posts')
  },
  createPost(data) {
    return httpAuth.post(config.baseApiUrl + '/post', data, {
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Accept: 'application/json'
      }
    })
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
