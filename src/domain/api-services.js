import config from '@/configs/app.base'
import httpAuth from '@/infrastructures/api-http-auth'

export default {
  jwtToken() {
    console.log(httpAuth)
    return httpAuth.get(config.baseApiUrl + '/jwt')
  },
  // USER
  getAllUser() {
    return httpAuth.get(config.baseApiUrl + '')
  },
  // PROFILE
  getProfile(id) {
    return httpAuth.get(config.baseApiUrl + `/user/${id}`)
  },
  editProfile(data) {
    return httpAuth.put(config.baseApiUrl + '/user', data)
  },
  getFollower(id) {
    return httpAuth.get(config.baseApiUrl + `/follow/follower/${id}`)
  },
  getFollowing(id) {
    return httpAuth.get(config.baseApiUrl + `/follow/following/${id}`)
  },
  addFollow(id) {
    return httpAuth.post(config.baseApiUrl + `/follow/${id}`)
  },

  // POST
  getAllPost() {
    return httpAuth.get(config.baseApiUrl + '/posts')
  },
  createPost(data) {
    console.log('data', data)
    return httpAuth.post(config.baseApiUrl + '/post', data)
  },
  getPostById(id) {
    return httpAuth.get(config.baseApiUrl + `/posts/${id}`)
  },
  addLikePost(data) {
    return httpAuth.post(config.baseApiUrl + `/post/like`, data)
  },
  removeLikePost(likeId) {
    return httpAuth.delete(config.baseApiUrl + `/like/${likeId}`)
  },

  // MESSAGE
  getAllMessage(id) {
    return httpAuth.get(config.baseApiUrl + `/message/room/${id}/messages`)
  },
  getAllParticipant(roomId) {
    return httpAuth.get(config.baseApiUrl + `/message/room/${roomId}/participant`)
  },
  getMessageNearest() {
    return httpAuth.get(config.baseApiUrl + '/message/recent')
  },
  addParticipant(data) {
    return httpAuth.post(config.baseApiUrl + '/message/room/participant', data)
  },
  addMessage(data) {
    return httpAuth.post(config.baseApiUrl + '/message', data)
  },

  //  NOTIFICATION
  getAllNotification() {
    return httpAuth.get(config.baseApiUrl + '/notification')
  }
}
