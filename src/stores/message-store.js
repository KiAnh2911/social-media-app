
import apiServices from '@/domain/api-services';
import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: () => ({
    messagesByRoom: {}
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
    }
  },
  getters: {
    getMessagesByRoom: (state) => (roomMessageId) => state.messagesByRoom[roomMessageId] || []
  }
});

