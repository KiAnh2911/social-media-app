<template>
  <div class="fixed h-screen w-[250px] p-3 border-r flex flex-col gap-5">
    <nav class="flex flex-col flex-1 gap-5">
      <div class="flex justify-center my-10">
        <img :src="logo" alt="logo" class="object-cover h-22 w-28" />
      </div>
      <ul>
        <li v-for="url in urls" :key="url.label">
          <router-link
            :to="{ name: `${url.value}` }"
            class="flex items-center gap-5 px-3 py-2 rounded-md hover:bg-slate-200"
            active-class="font-semibold bg-slate-200"
          >
            <component :is="url.icon" />
            <span class="text-sm font-semibold" active-class="font-semibold">{{ url.value }}</span>
          </router-link>
        </li>
        <li>
          <div class="flex items-center gap-5 px-3 py-2 rounded-md hover:bg-slate-200">
            <CreateIcon />
            <span>Create</span>
          </div>
        </li>
      </ul>
    </nav>
    <div class="flex items-center gap-5 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-200">
      <!-- <CreateIcon /> -->
      <span>Logout</span>
    </div>
  </div>
</template>

<script setup>
import { markRaw, ref } from 'vue'
import logo from '../assets/icons/logo.svg'
import HomeIcon from './icons/HomeIcon.vue'
import MessageIcon from './icons/MessageIcon.vue'
import ProfileIcon from './icons/ProfileIcon.vue'
import CreateIcon from './icons/CreateIcon.vue'

const urls = ref([
  {
    label: 'Home',
    value: 'Home',
    icon: markRaw(HomeIcon)
  },
  { label: 'Message', value: 'Message', icon: markRaw(MessageIcon) },
  { label: 'Profile', value: 'Profile', icon: markRaw(ProfileIcon) }
])
</script>
