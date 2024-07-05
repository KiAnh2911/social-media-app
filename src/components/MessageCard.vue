<script setup>
import { RouterLink } from 'vue-router'

defineProps(['message'])
</script>

<template>
  <RouterLink
    class="flex items-center gap-3 px-3 py-2 rounded-lg"
    active-class="bg-gray-100"
    :to="{ name: 'MessageDetail', params: { id: message.id } }"
  >
    <div class="w-14 h-14">
      <img
        src="https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="avatar"
        class="object-cover w-full h-full rounded-full"
      />
    </div>
    <div>
      <h3 class="mb-1.5 text-sm text-black">{{ message.username }}</h3>
      <div class="flex items-center gap-1 text-xs text-gray-400">
        <span>{{ message.content }}</span>
        <span class="w-1 h-1 mx-1 bg-gray-300 rounded-full"></span>
        <span>{{ message.timestamp }}</span>
      </div>
    </div>
  </RouterLink>
</template>
