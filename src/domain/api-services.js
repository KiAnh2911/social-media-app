import config from '@/configs/app.base'
import httpAuth from '@/infrastructures/api-http-auth'

export default {
  jwtToken() {
    console.log(httpAuth)
    return httpAuth.get(config.baseApiUrl + '/jwt')
  },
  // USER
  getAllUserRecommend() {
    return httpAuth.get(config.baseApiUrl + '/follow/recommend')
  },
  getAllUser() {
    return httpAuth.get(config.baseApiUrl + '/user/all')
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
  unFollow(id) {
    return httpAuth.delete(config.baseApiUrl + `/follow/${id}`)
  },

  // POST
  getAllCommentByPostId(id) {
    return httpAuth.get(config.baseApiUrl + `/post/${id}/comments`)
  },
  addComment(data) {
    return httpAuth.post(config.baseApiUrl + '/post/comment', data)
  },
  getAllPost() {
    return httpAuth.get(config.baseApiUrl + '/posts')
  },
  getPostById(id) {
    return httpAuth.get(config.baseApiUrl + `/posts/${id}`)
  },
  createPost(data) {
    console.log('data', data)
    return httpAuth.post(config.baseApiUrl + '/post', data)
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
  addGroupMessageChat(data) {
    return httpAuth.post(config.baseApiUrl + '/message/room', data)
  },

  //  NOTIFICATION
  getAllNotification() {
    return httpAuth.get(config.baseApiUrl + '/notification')
  }
}
