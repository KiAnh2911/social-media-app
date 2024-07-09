<script setup>
import CardNotification from '@/components/notification/CardNotification.vue'
</script>

<template>
  <div class="max-w-[560px] mx-auto p-14">
    <h2 class="mb-10 text-2xl font-medium">Thông báo</h2>
    <div v-for="n in 10" :key="n">
      <CardNotification />
    </div>
  </div>
</template>
