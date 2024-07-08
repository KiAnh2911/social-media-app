<script setup>
defineProps(['follow'])
</script>

<template>
  <div class="flex items-center gap-3 px-3 py-2">
    <div class="w-12 h-12">
      <img
        src="https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        class="object-cover w-full h-full rounded-full"
      />
    </div>
    <div>
      <h3 class="mb-1 text-sm font-medium">ming_raw</h3>
      <p class="text-xs text-gray-400">Suggested for you</p>
    </div>
    <div class="flex-1 text-sm text-blue-400 cursor-pointer text-end">Follow</div>
  </div>
</template>
