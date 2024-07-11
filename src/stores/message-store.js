
import apiServices from '@/domain/api-services';
import { defineStore } from 'pinia';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

export const useMessageStore = defineStore('message', {
  state: () => ({
    messagesByRoom: {},
    stompClient: null,
  }),
  actions: {
    async fetchMessages(roomMessageId) {
      try {
        const response = await apiServices.getAllMessage(roomMessageId);
        this.messagesByRoom[roomMessageId] = response.data;
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    },

    addMessage(roomMessageId, message) {
      if (!this.messagesByRoom[roomMessageId]) {
        this.messagesByRoom[roomMessageId] = [];
      }
      this.messagesByRoom[roomMessageId].push(message);
    },

    connectWebSocket() {
      const socket = new SockJS('http://localhost:8080/ws');
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect({}, frame => {
        console.log('Connected: ' + frame);
      }, error => {
        console.error('Error connecting to WebSocket:', error);
      });
    },

  },
  getters: {
    getMessagesByRoom: (state) => (roomMessageId) => state.messagesByRoom[roomMessageId] || []
  }
});

