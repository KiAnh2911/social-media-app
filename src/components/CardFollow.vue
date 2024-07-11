<script setup>
import apiServices from '@/domain/api-services'
import { message } from 'ant-design-vue'
import { RouterLink } from 'vue-router'

// Define props and emits
defineProps(['follow', 'type'])
const emit = defineEmits(['updateUsers'])

const handleUnFollowing = () => {
  console.log('eeee')
}

const handleFollow = async (id) => {
  try {
    const { data } = await apiServices.addFollow(id)
    console.log('data', data)
    if (data) {
      message.success('You followed successfully')
      await fetchAllUsers()
    }
  } catch (error) {
    message.error('Failed to follow')
  }
}

const handleRemoveFollower = () => {
  console.log('handleRemoveFollower')
}

const fetchAllUsers = async () => {
  try {
    const response = await apiServices.getAllUser()
    emit('updateUsers', response.data)
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}
</script>

<template>
  <div class="flex items-center justify-between gap-3 px-3 py-2">
    <div class="flex items-center gap-5">
      <RouterLink class="w-12 h-12" to="#">
        <img
          :src="
            follow.profile_pic_url ? follow.profile_pic_url : 'public/images/avatar-default.png'
          "
          class="object-cover w-full h-full rounded-full"
        />
      </RouterLink>
      <div>
        <RouterLink to="#">
          <h3 class="mb-1 text-sm font-medium">{{ follow.username }}</h3>
        </RouterLink>
        <p class="text-xs text-gray-400" v-if="!follow">Suggested for you</p>
        <p class="text-xs text-gray-400 line-clamp-1" v-else>
          {{ follow.firstName + ' ' + follow.lastName }}
        </p>
      </div>
    </div>
    <div
      class="flex-1 text-sm text-blue-400 cursor-pointer text-end"
      v-if="type === 'follow'"
      @click="() => handleFollow(follow.id)"
    >
      Follow
    </div>
    <div
      class="px-3 py-1 text-sm text-black bg-gray-300 rounded-md cursor-pointer"
      v-else-if="type === 'follower'"
      @click="handleRemoveFollower"
    >
      Remove
    </div>
    <div
      class="px-3 py-1 text-sm text-black bg-gray-300 rounded-md cursor-pointer"
      @click="handleUnFollowing"
      v-else
    >
      Following
    </div>
  </div>
</template>
