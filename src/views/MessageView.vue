<script setup>
import MessageCard from '../components/MessageCard.vue'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const messages = ref([
  {
    roomMessageId: 3,
    roomMessageName: 'Phong chat 3',
    sender: {
      id: 3,
      firstName: 'Nguyen Van',
      lastName: 'B'
    },
    lastMessageContent: 'hello nhom chat 1',
    createdAt: '2024-07-04T03:29:47.000+00:00'
  },
  {
    roomMessageId: 1,
    roomMessageName: 'phong chat 1',
    sender: {
      id: 3,
      firstName: 'Nguyen Van',
      lastName: 'A'
    },
    lastMessageContent: 'hello nhom chat 1',
    createdAt: '2024-07-04T03:29:47.000+00:00'
  },
  {
    roomMessageId: 4,
    roomMessageName: 'nhom chat 4',
    sender: {
      id: 3,
      firstName: 'Nguyen Van',
      lastName: 'Banh'
    },
    lastMessageContent: 'hello nhom chat4',
    createdAt: '2024-07-04T03:22:38.000+00:00'
  }
])

const router = useRouter()
const route = useRoute()

const showMessageDetail = (message) => {
  router.push({ name: 'MessageDetail', params: { id: message.roomMessageId } })
}

onMounted(() => {
  if (!route.params.id && messages.value.length > 0) {
    showMessageDetail(messages.value[0])
  }
})
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
</template>
