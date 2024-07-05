<script setup>
import PostItem from '@/components/PostItem.vue'
</script>

<template>
  <div class="flex gap-10 p-5 w-[1120px] mx-auto">
    <div class="flex flex-col gap-5">
      <div v-for="n in 10" :key="n">
        <PostItem />
      </div>
    </div>
    <div class="flex-1">asdjksdghsdj</div>
  </div>
</template>
