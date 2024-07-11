<script setup>
import CardNotification from '@/components/notification/CardNotification.vue'
import apiServices from '@/domain/api-services'
import { onMounted, ref } from 'vue'

const listNotification = ref([])

onMounted(async () => {
  try {
    const { data } = await apiServices.getAllNotification()
    console.log('data', data)
    listNotification.value = data
  } catch (error) {
    console.log('error', error)
  }
})

console.log('listNotification', listNotification.value)
</script>

<template>
  <div class="max-w-[560px] mx-auto p-14">
    <h2 class="mb-10 text-2xl font-medium">Thông báo</h2>
    <div v-for="notification in listNotification" :key="notification.id">
      <CardNotification :notification="notification" />
    </div>
  </div>
</template>
