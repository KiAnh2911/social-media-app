<script setup>
import Navbar from './components/NavBar.vue'
</script>

<template>
  <div class="flex justify-between">
    <Navbar />
    <div class="w-[calc(100%_-_250px)] ml-[250px]">
      <RouterView />
    </div>
  </div>
</template>
