<!-- MessageDetail.vue -->
<script setup>
import { reactive, ref, onMounted, nextTick, computed, watch } from 'vue'
import InfoIcon from '../icons/InfoIcon.vue'
import CardChat from '../CardChat.vue'
import apiServices from '@/domain/api-services'
import { useRoute } from 'vue-router'
import { useMessageStore } from '@/stores/message-store'

const route = useRoute()
const user = JSON.parse(localStorage.getItem('user'))

const showInfo = ref(false)
const message = reactive({
  messageContent: ''
})

const messageStore = useMessageStore()
const messageList = computed(() => messageStore.getMessagesByRoom(Number(route.params.id)))

const sendWebsocketMessage = (message) => {
  const destination = `/app/message/${Number(route.params.id)}`

  const { stompClient } = messageStore
  if (stompClient && stompClient.connected) {
    stompClient.send(destination, {}, JSON.stringify(message))
  } else {
    console.error('stompClient is not connected')
  }
}

const handleShowInfo = () => {
  showInfo.value = !showInfo.value
}

const scrollToBotom = () => {
  nextTick(() => {
    const scroll = document.getElementById('contentMsg')
    scroll.scrollTop = scroll.scrollHeight
  })
}

const addMessageRoom = async () => {
  try {
    const data = {
      messageContent: message.messageContent,
      roomMessageId: Number(route.params.id),
      senderId: user.id
    }
    await apiServices.addMessage(data)
    sendWebsocketMessage(data)
    scrollToBotom()
  } catch (error) {
    console.log('error', error)
  } finally {
    message.messageContent = ''
  }
}

const fetchMessages = async () => {
  await messageStore.fetchMessages(Number(route.params.id))
  scrollToBotom()
}

onMounted(fetchMessages)

watch(() => route.params.id, fetchMessages)
</script>

<template>
  <div class="flex h-screen">
    <div class="flex flex-col justify-between flex-1 h-full">
      <header class="flex items-center justify-end h-20 px-5 py-3 border-b">
        <span @click="handleShowInfo" class="cursor-pointer"><InfoIcon /></span>
      </header>
      <div class="flex-1 p-5 overflow-y-auto" id="contentMsg">
        <CardChat v-for="msg in messageList" :key="msg.id" :message="msg" />
      </div>
      <div class="h-12 px-5 mb-5">
        <div class="relative px-4 py-2 border rounded-3xl">
          <input
            type="text"
            placeholder="Message ...."
            class="w-full outline-none"
            v-model="message.messageContent"
            @keyup.enter="addMessageRoom"
          />
          <button
            class="absolute text-blue-400 -translate-y-1/2 cursor-pointer right-5 top-1/2"
            :class="message.messageContent.length > 0 ? 'block' : 'hidden'"
            @click="addMessageRoom"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    <div class="w-[320px] border-l flex flex-col transition-all" v-if="showInfo">
      <div class="flex items-center h-20 px-3 border-b">
        <h2 class="text-xl font-medium">Details</h2>
      </div>
      <div class="flex flex-col flex-1 gap-5 px-3 py-4 border-b content">
        <h2 class="text-xl font-medium">Members</h2>
        <div class="flex-1 overflow-y-auto">content</div>
      </div>
      <div class="flex flex-col justify-start gap-3 px-3 py-4 text-red-400 h-28">
        <div class="cursor-pointer">Report</div>
        <div class="cursor-pointer">Block</div>
        <div class="cursor-pointer">Delete Chat</div>
      </div>
    </div>
  </div>
</template>
