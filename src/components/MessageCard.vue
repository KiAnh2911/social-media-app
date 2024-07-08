<script setup>
import { formatDate } from '@/utils/format-date'
import { RouterLink } from 'vue-router'

defineProps(['message'])
</script>

<template>
  <RouterLink
    class="flex items-center gap-3 px-3 py-2 rounded-lg"
    active-class="bg-gray-100"
    :to="{ name: 'MessageDetail', params: { id: message.roomMessageId } }"
  >
    <div class="relative">
      <div class="w-14 h-14">
        <img
          src="https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
          class="object-cover w-full h-full rounded-full"
        />
      </div>
      <div class="avatar-channel-active"></div>
    </div>
    <div class="flex-1">
      <div class="flex items-center justify-between">
        <h3 class="mb-1.5 text-base text-black">{{ message.roomMessageName }}</h3>
        <span class="text-xs">{{ formatDate(message.createdAt) }}</span>
      </div>
      <div class="flex items-center gap-1 text-xs text-gray-400">
        <span>{{ message.sender.lastName }}: {{ message.lastMessageContent }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.avatar-channel-active {
  width: 12px;
  height: 12px;
  background-color: #33ca48;
  border-radius: 50%;
  border: 2px solid #fff;
  position: absolute;
  right: -5%;
  bottom: 0;
}
</style>
