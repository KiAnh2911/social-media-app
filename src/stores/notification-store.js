import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { defineStore } from 'pinia'
import config from '@/configs/app.base'
// import apiServices from '@/domain/api-services'

const { id: userId } = JSON.parse(localStorage.getItem('user')) || 1

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: [],
    stompClient: null
  }),
  actions: {
    connectWebSocket() {
      console.log('in websocket')
      const socket = new SockJS(config.baseApiUrl + '/ws')
      this.stompClient = Stomp.over(socket)

      this.stompClient.connect(
        {},
        (frame) => {
          console.log('Connected: ' + frame)
          this.stompClient.subscribe('/user/' + userId + '/queue/private', (message) => {
            console.log(message)
            alert(message.body)
          })
        },
        (error) => {
          console.error('Error connecting to WebSocket:', error)
        }
      )
    },

    addNotification(notification) {
      this.notifications.push(notification)
    }
  },
  getters: {
    getAllNotifications: (state) => state.notifications
  }
})
