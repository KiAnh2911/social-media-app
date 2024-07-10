<script setup>
import NavBar from './NavBar.vue'
</script>

<template>
  <div class="flex justify-between">
    <NavBar />
    <div class="w-[calc(100%_-_250px)] ml-[250px]">
      <RouterView />
    </div>
  </div>
</template>
