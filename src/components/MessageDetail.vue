<script setup>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import MessageYourIcon from './icons/MessageYourIcon.vue'
import InfoIcon from './icons/InfoIcon.vue'

// const messageDetail = ref(false)
const message = reactive({
  messageContent: ''
})

const addMessage = () => {
  console.log(message)
  message.messageContent = ''
}

const route = useRoute()

const messageDetail = computed(() => !route.params.id)
</script>

<template>
  <div class="h-screen">
    <div v-if="messageDetail" class="flex flex-col items-center justify-center h-full gap-3">
      <MessageYourIcon />
      <h2 class="text-xl font-medium">Your messages</h2>
      <p class="text-sm text-gray-400">Send a message to start a chat.</p>
    </div>
    <div v-else class="flex flex-col justify-between h-full">
      <header class="flex items-center justify-between h-24 px-5 py-3">
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
        <span><InfoIcon /></span>
      </header>
      <div class="flex-1 p-5 mb-10 overflow-y-auto content">
        {{ route.params.id }}
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
            @click="addMessage"
          >
            {{ !(message.messageContent.length === 0) ? 'Send' : '' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
