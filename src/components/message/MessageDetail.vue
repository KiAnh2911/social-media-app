<script setup>
import { reactive, ref, onMounted, nextTick } from 'vue'
import InfoIcon from '../icons/InfoIcon.vue'
import CardChat from '../CardChat.vue'
import api from '@/domain/api-services'
import { useRoute } from 'vue-router'
import apiServices from '@/domain/api-services'

const isLoading = ref(false)
const messageList = ref([])

const route = useRoute()

const id = Number(route.params.id)
const user = JSON.parse(localStorage.getItem('user'))

const showInfo = ref(false)

const message = reactive({
  messageContent: ''
})

const addMessage = async () => {
  console.log(message)
  try {
    const data = {
      messageContent: message.messageContent,
      roomMessageId: id,
      senderId: user.id
    }
    const response = await apiServices.addMessage(data)
    console.log('response', response)

    if (response.data) {
      fetchMessages(id)
      message.messageContent = ''
    }
  } catch (error) {
    console.log('error', error)
  }
}

const handleShowInfo = () => {
  showInfo.value = !showInfo.value
}

function scrollToBotom() {
  nextTick(() => {
    let scroll = document.getElementById('contentMsg')
    scroll.scrollTop = scroll.scrollHeight
  })
}

const fetchMessages = async (id) => {
  try {
    isLoading.value = true
    const { data } = await api.getAllMessage(id)
    nextTick(scrollToBotom)
    messageList.value = data
  } catch (error) {
    console.error(error)
    message.error = error.response
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  // scrollToBotom()
  fetchMessages(id)
})

const handleMessageSelected = (messageId) => {
  fetchMessages(messageId)
}
</script>

<template>
  <div class="flex h-screen">
    <div class="flex flex-col justify-between flex-1 h-full">
      <header class="flex items-center justify-between h-20 px-5 py-3 border-b">
        <div class="flex items-center gap-5">
          <div class="w-14 h-14">
            <img
              src="https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              class="object-cover w-full h-full rounded-full"
            />
          </div>
          <h2 class="text-xl font-medium">UI Gradient | Learn UI/UX Design</h2>
        </div>
        <span @click="handleShowInfo" class="cursor-pointer"><InfoIcon /></span>
      </header>
      <div class="flex-1 p-5 overflow-y-auto" id="contentMsg">
        <CardChat
          v-for="msg in messageList"
          :key="msg.id"
          :message="msg"
          @messageSelected="handleMessageSelected"
        />
      </div>
      <div class="h-12 px-5 mb-5">
        <div class="relative px-4 py-2 border rounded-3xl">
          <input
            type="text"
            placeholder="Message ...."
            class="w-full outline-none"
            v-model="message.messageContent"
            @keyup.enter="addMessage"
          />

          <button
            class="absolute text-blue-400 -translate-y-1/2 cursor-pointer right-5 top-1/2"
            :class="message.messageContent.length > 0 ? 'block' : 'hidden'"
            @click="addMessage"
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
