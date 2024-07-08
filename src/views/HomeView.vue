<script setup>
import PostItem from '@/components/PostItem.vue'
import CardFollow from '@/components/CardFollow.vue'
</script>

<template>
  <div class="flex gap-10 p-5 w-[1120px] mx-auto">
    <div class="flex flex-col flex-1 gap-5 px-20">
      <div v-for="n in 10" :key="n">
        <PostItem />
      </div>
    </div>
    <div class="w-[320px] p-3">
      <div>
        <h2 class="px-3 mb-10 text-lg font-medium">Suggested for you</h2>
        <div class="flex flex-col">
          <CardFollow v-for="n in 10" :key="n" />
        </div>
      </div>
    </div>
  </div>
</template>
