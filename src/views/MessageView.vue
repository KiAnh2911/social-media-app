<script setup>
import MessageCard from '../components/message/MessageCard.vue'
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/domain/api-services'
import { message } from 'ant-design-vue'
import ModalCreateGroup from '@/components/modal/ModalCreateGroup.vue'
import { useMessageStore } from '@/stores/message-store'

const isLoading = ref(false)
const listRoomMessageInfo = ref([])
const modalCreateGroupRef = ref()
const router = useRouter()
const user = JSON.parse(localStorage.getItem('user'))
const messageStore = useMessageStore()
const showMessageDetail = (message) => {
  router.push({ name: 'MessageDetail', params: { id: message.roomMessageId } })
}
console.log('listRoomMessageInfo', listRoomMessageInfo.value)

const roomMessageIds = ref([])

console.log('roomMessageIds', roomMessageIds.value)

watch(
  listRoomMessageInfo,
  (value) => {
    redirectRoom(value)
  },
  { deep: true }
)

function redirectRoom(room) {
  const roomId = room[0].roomMessageId

  router.push({ name: 'MessageDetail', params: { id: roomId } })
}

const handleModalCreateGroup = () => {
  modalCreateGroupRef.value.show()
}

const subscribeToRoom = (stompClient, roomMessageId) => {
  if (stompClient && stompClient.connected) {
    stompClient.subscribe(
      `/room/${roomMessageId}`,
      (message) => {
        console.log('Received message:', message)
        messageStore.addMessage(roomMessageId, JSON.parse(message.body))
      },
      (error) => {
        console.error('Error subscribing to room:', error)
      }
    )
  } else {
    console.error('stompClient is not connected')
  }
}

const connect = () => {
  messageStore.connectWebSocket()
  const { stompClient } = messageStore

  stompClient.connect({}, (frame) => {
    console.log('Connected: ' + frame)
    if (roomMessageIds.value.length > 0) {
      roomMessageIds.value.forEach((roomMessageId) => {
        subscribeToRoom(stompClient, roomMessageId)
      })
    }
  })
}

onMounted(async () => {
  try {
    isLoading.value = true
    const { data } = await api.getMessageNearest()
    listRoomMessageInfo.value = data

    roomMessageIds.value = data.map((room) => room.roomMessageId)

    connect()
    // subscribeToRoom()
  } catch (error) {
    isLoading.value = true
    message.error(error.message)
  } finally {
    isLoading.value = false
  }
})
console.log(listRoomMessageInfo)
</script>

<template>
  <div class="flex justify-between">
    <div class="w-[350px] py-2 flex flex-col border border-r h-screen">
      <div class="h-24 px-5">
        <h2 class="text-xl font-medium uppercase">{{ user.username }}</h2>
      </div>
      <div class="flex-1 overflow-y-auto">
        <div class="flex items-center justify-between px-5 mb-5">
          <h2 class="font-medium uppercase">Message</h2>
          <div
            class="px-3 py-1 text-sm font-medium text-black bg-gray-300 rounded-md cursor-pointer"
            @click="handleModalCreateGroup"
          >
            Create Group
          </div>
        </div>
        <div
          class="flex flex-col"
          v-for="message in listRoomMessageInfo"
          :key="message.roomMessageId"
          @click="showMessageDetail(message)"
        >
          <MessageCard :message="message" />
        </div>
      </div>
    </div>
    <div class="flex-1">
      <router-view />
    </div>
  </div>

  <ModalCreateGroup ref="modalCreateGroupRef" />
</template>
