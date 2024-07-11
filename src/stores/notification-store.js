import apiServices from '@/domain/api-services';
import { defineStore } from 'pinia';
import SockJS from 'sockjs-client';


export const useNotificationStore = defineStore('notification', {
    state: () => ({
      notifications: [],
      stompClient: null,
    }),
    actions: {
        connectWebSocket() {
            console.log('in websocket');
            const socket = new SockJS('http://localhost:8080/ws');
            this.stompClient = Stomp.over(socket);
            this.stompClient.connect({}, frame => {
                console.log('Connected: ' + frame);
            }, error => {
                console.error('Error connecting to WebSocket:', error);
            });
        },

        addNotification(notification) {
        this.notifications.push(notification);
      }
    },
    getters: {
      getAllNotifications: (state) => state.notifications
    }
  });