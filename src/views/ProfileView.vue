<script setup>
import { onBeforeMount, reactive, ref } from 'vue'
import PostItem from '@/components/post/PostItem.vue'
import apiServices from '@/domain/api-services'
import { message, Skeleton } from 'ant-design-vue'

const isLoading = ref(false)
const userPost = reactive([])
const userProfile = ref({})
const { id } = JSON.parse(localStorage.getItem('user'))

console.log('userPost', userPost)

onBeforeMount(async () => {
  try {
    isLoading.value = true
    const { data } = await apiServices.getProfile(id)
    userProfile.value = data
  } catch (error) {
    message.error(error.response.message)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="max-w-[900px] mx-auto py-10">
    <div
      class="flex items-start justify-between gap-20 pb-10 mb-10 border-b"
      v-if="!isLoading && userProfile"
    >
      <div
        class="w-[220px] h-[220px] rounded-full border"
        style="background-color: rgb(6, 146, 85)"
      >
        <img
          :src="userProfile.userInfo?.profile_pic_url"
          :alt="userProfile.userInfo?.profile_pic_url"
          class="object-cover w-full h-full rounded-full"
        />
      </div>
      <div class="flex flex-col flex-1 gap-5">
        <div class="flex items-center gap-5">
          <h3 class="text-2xl font-normal">{{ userProfile.userInfo?.username }}</h3>
          <button class="px-3 py-1 text-sm text-black bg-gray-300 rounded-md">Edit profile</button>
        </div>
        <div class="flex gap-5">
          <span> <b class="text-xl"> 0 </b> post</span>
          <span>
            <b class="text-xl"> {{ userProfile.totalFollowers }} </b> followers</span
          >
          <span>
            <b class="text-xl"> {{ userProfile.totalFollowings }} </b> following</span
          >
        </div>
        <div>
          <h3 class="text-xl font-medium">
            {{ userProfile.userInfo?.firstName + ' ' + userProfile.userInfo?.lastName }}
          </h3>
          <p>{{ userProfile.userInfo?.bio }}</p>
        </div>
      </div>
    </div>
    <div v-else class="mb-10">
      <Skeleton avatar :paragraph="{ rows: 4 }" />
    </div>
    <h2 class="mb-4 text-xl text-center uppercase">Posts</h2>
    <div class="flex flex-col gap-5 px-20">
      <PostItem v-for="n in 10" :key="n" />
    </div>
  </div>
</template>
