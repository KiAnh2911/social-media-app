import config from '@/configs/app.base'
import httpAuth from '@/infrastructures/api-http-auth'

export default {
  jwtToken() {
    console.log(httpAuth)
    return httpAuth.get(config.baseApiUrl + '/jwt')
  },
  // Profile
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

  // Post
  getAllPost() {
    return httpAuth.get(config.baseApiUrl + '/posts')
  },
  createPost(data) {
    console.log('data', data)
    return httpAuth.post(config.baseApiUrl + '/post', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
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
  // Message
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
