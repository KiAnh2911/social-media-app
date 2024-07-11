<script setup>
import { markRaw, ref } from 'vue'
const logo = 'https://cache.giaohangtietkiem.vn/d/be7392d4a2f308c90e0213fce54d91c8.jpg'
import HomeIcon from './icons/HomeIcon.vue'
import MessageIcon from './icons/MessageIcon.vue'
import ProfileIcon from './icons/ProfileIcon.vue'
import NotificationIcon from './icons/NotificationIcon.vue'
import authServices from '@/domain/auth-services'

const { id } = JSON.parse(localStorage.getItem('user'))

const urls = ref([
  {
    label: 'Home',
    value: 'Home',
    icon: markRaw(HomeIcon)
  },
  { label: 'Message', value: 'Message', icon: markRaw(MessageIcon) },
  { label: 'Notification', value: 'Notification', icon: markRaw(NotificationIcon) }
])

const handleLogout = async () => {
  try {
    await authServices.logout()
  } catch (error) {
    console.log('error', error)
  }
}
</script>

<template>
  <div class="fixed h-screen w-[250px] p-3 border-r flex flex-col gap-5">
    <nav class="flex flex-col flex-1 gap-5">
      <div class="flex justify-center my-10">
        <img :src="logo" alt="logo" class="object-cover rounded-full h-22 w-28" />
      </div>
      <ul>
        <li v-for="url in urls" :key="url.label">
          <router-link
            :to="{ name: `${url.value}` }"
            class="flex items-center gap-5 px-3 py-2 rounded-md hover:bg-slate-200"
            exact-active-class="font-semibold bg-slate-200"
          >
            <component :is="url.icon" />
            <span class="text-sm font-semibold" exact-active-class="font-semibold">
              {{ url.value }}
            </span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="`/profile/${id}`"
            class="flex items-center gap-5 px-3 py-2 rounded-md hover:bg-slate-200"
            exact-active-class="font-semibold bg-slate-200"
          >
            <ProfileIcon />
            <span class="text-sm font-semibold" exact-active-class="font-semibold">Profile</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div
      class="flex items-center gap-5 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-200"
      @click="handleLogout"
    >
      <!-- <CreateIcon /> -->
      <span>Logout</span>
    </div>
  </div>
</template>
