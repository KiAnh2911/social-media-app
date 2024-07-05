<script setup>
import HeaderApp from './components/HeaderApp.vue'
</script>

<template>
  <div class="flex justify-between">
    <HeaderApp />
    <div class="w-[calc(100%_-_250px)] ml-[250px]">
      <RouterView />
    </div>
  </div>
</template>
