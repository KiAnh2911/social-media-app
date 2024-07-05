<script setup>
import MessageDetail from '../components/MessageDetail.vue'
import MessageCard from '../components/MessageCard.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const messages = ref([
  {
    id: '1',
    username: 'UI Gradient | Learn UI/UX Design',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    username: 'UI Gradient | Learn UI/UX Design 2',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    username: 'UI Gradient | Learn UI/UX Design 3',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    username: 'UI Gradient | Learn UI/UX Design',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    username: 'UI Gradient | Learn UI/UX Design',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    username: 'UI Gradient | Learn UI/UX Design',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  },
  {
    id: '11',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    username: 'UI Gradient | Learn UI/UX Design',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  },
  {
    id: '21',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    username: 'UI Gradient | Learn UI/UX Design 2',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  },
  {
    id: '31',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    username: 'UI Gradient | Learn UI/UX Design 3',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  },
  {
    id: '41',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    username: 'UI Gradient | Learn UI/UX Design',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  },
  {
    id: '51',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    username: 'UI Gradient | Learn UI/UX Design',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  },
  {
    id: '61',
    url: 'https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    username: 'UI Gradient | Learn UI/UX Design',
    content: 'You: fdereererewrfdereererewr',
    timestamp: '16m'
  }
])

const router = useRouter()

const showMessageDetail = (message) => {
  router.push({ name: 'MessageDetail', params: { id: message.id } })
}
</script>

<template>
  <div class="flex justify-between">
    <div class="w-[350px] py-2 flex flex-col border border-r h-screen">
      <div class="h-24 px-5">
        <h2 class="text-xl font-medium uppercase">USER NAME</h2>
      </div>
      <div class="flex-1 overflow-y-auto">
        <h2 class="px-5 mb-5 font-medium uppercase">Message</h2>
        <div
          class="flex flex-col"
          v-for="message in messages"
          :key="message.id"
          @click="showMessageDetail(message)"
        >
          <MessageCard :message="message" />
        </div>
      </div>
    </div>
    <div class="flex-1">
      <MessageDetail />
    </div>
  </div>
</template>
