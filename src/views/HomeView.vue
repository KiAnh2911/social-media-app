<script setup>
import PostItem from '@/components/post/PostItem.vue'
import CardFollow from '@/components/CardFollow.vue'
import CreatePost from '@/components/post/CreatePost.vue'
import api from '@/domain/api-services'
import { onMounted, ref } from 'vue'
import { message } from 'ant-design-vue'
import SkeletonPost from '@/components/SkeletonPost.vue'

const listPost = ref([])
const listUser = ref([])
const isLoading = ref(false)

onMounted(async () => {
  try {
    isLoading.value = true
    const { data } = await api.getAllPost()
    listPost.value = data
    const response = await api.getAllUser()
    listUser.value = response.data
  } catch (error) {
    isLoading.value = true
    message.error(error.response)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="flex gap-10 p-5 w-[1120px] mx-auto">
    <div class="flex flex-col flex-1 gap-5 px-20">
      <CreatePost />
      <div v-if="!isLoading">
        <div v-for="post in listPost.reverse()" :key="post.id" class="mb-5">
          <PostItem :post="post" />
        </div>
      </div>
      <div v-else>
        <div v-for="n in 3" :key="n" class="mb-5">
          <SkeletonPost />
        </div>
      </div>
    </div>
    <div class="w-[320px] p-3">
      <div>
        <h2 class="px-3 mb-10 text-lg font-medium">Suggested for you</h2>
        <div class="flex flex-col">
          <CardFollow v-for="user in listUser" :key="user.id" :follow="user" type="follow" />
        </div>
      </div>
    </div>
  </div>
</template>
