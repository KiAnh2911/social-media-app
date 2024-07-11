
import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: () => ({
    messageList: []
  }),
  actions: {
    addMessage(message) {
      this.messageList.push(message);
    }
  },
  getters: {
    getMessageList: (state) => state.messageList
  }
});
