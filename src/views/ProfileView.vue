<script setup>
import { onMounted, ref } from 'vue'
import apiServices from '@/domain/api-services'
import { message, Skeleton } from 'ant-design-vue'
import ModalFollower from '@/components/modal/ModalFollower.vue'
import ModalFollowing from '@/components/modal/ModalFollowing.vue'
import ModalEditProfile from '@/components/modal/ModalEditProfile.vue'
import { useRoute } from 'vue-router'
import PostItem from '@/components/post/PostItem.vue'
import PostIcon from '@/components/icons/PostIcon.vue'

const isLoading = ref(false)
// const showModalProfile = ref(false)
const modalEditProfileRef = ref()
const modalFollowerRef = ref()
const modalFollowingRef = ref()
const profileUser = ref()
const userPost = ref([])
const route = useRoute()

// const image = ref({})
// const originalUserProfile = ref({})
const id = route.params.id
const { id: userId } = JSON.parse(localStorage.getItem('user'))
console.log('userPost', userPost.value)

// const handleOnchangeImage = (e) => {
//   let files = e.target.files
//   if (!files.length) return
//   image.value = files[0]
// }

const handleShowModalFollowing = () => {
  modalFollowingRef.value.show({ id })
}
function handleShowModalFollower() {
  modalFollowerRef.value.show({ id })
}

const handleShowModalProfile = () => {
  modalEditProfileRef.value.show({ profile: profileUser.value })
}

// const handleSubmit = async () => {
//   try {
//     const file = await fileToBase64(image.value)

//     const data = {
//       file,
//       firstName: profileUser.value.userInfo.firstName,
//       lastName: profileUser.value.userInfo.lastName,
//       bio: profileUser.value.userInfo.bio,
//       gender: profileUser.value.userInfo.gender
//     }
//     console.log('data', data.file)

//     const res = await apiServices.editProfile(data)
//     if (res) {
//       message.success('You updated successfully')
//     }
//     showModalProfile.value = false
//   } catch (error) {
//     message.error(error.response.data.error)
//   }
// }

// const handleCancel = () => {
//   profileUser.value = JSON.parse(JSON.stringify(originalUserProfile.value))
//   showModalProfile.value = false
// }

const handleFollow = () => {
  const { data } = apiServices.addFollow(id)
  console.log('data', data)
}

// const handleMessage = () => {
//   console.log('handleMessage')
// }

onMounted(async () => {
  try {
    isLoading.value = true
    const { data } = await apiServices.getProfile(id)
    profileUser.value = data
    const response = await apiServices.getPostById(id)
    userPost.value = response.data
  } catch (error) {
    message.error(error.response.data.error)
  } finally {
    isLoading.value = false
  }
})
console.log('profileUser', profileUser.value)
</script>

<template>
  <div class="max-w-[900px] mx-auto py-10">
    <div class="flex items-start justify-between gap-20 pb-10 mb-10 border-b" v-if="!isLoading">
      <div
        class="w-[220px] h-[220px] rounded-full border"
        style="background-color: rgb(6, 146, 85)"
      >
        <img
          :src="profileUser?.userInfo?.profile_pic_url"
          :alt="profileUser?.userInfo?.profile_pic_url"
          class="object-cover w-full h-full rounded-full"
        />
      </div>
      <div class="flex flex-col flex-1 gap-5">
        <div class="flex items-center gap-5">
          <h3 class="text-2xl font-normal">{{ profileUser?.userInfo?.username }}</h3>
          <button
            class="px-3 py-1 text-sm font-medium text-black bg-gray-300 rounded-md"
            @click="handleShowModalProfile"
            v-if="profileUser?.userInfo?.id === userId"
          >
            Edit profile
          </button>
          <div v-else class="flex items-center gap-3">
            <button
              class="px-3 py-1 text-sm font-medium text-black bg-gray-300 rounded-md"
              @click="handleFollow"
            >
              Follow
            </button>
            <button
              class="px-3 py-1 text-sm font-medium text-black bg-gray-300 rounded-md"
              @click="handleMessage"
            >
              Message
            </button>
          </div>
        </div>
        <div class="flex gap-5">
          <span> <b class="text-xl"> 0 </b> post</span>
          <div @click="handleShowModalFollower" class="cursor-pointer">
            <b class="text-xl"> {{ profileUser?.totalFollowers }} </b> followers
          </div>
          <span @click="handleShowModalFollowing" class="cursor-pointer">
            <b class="text-xl"> {{ profileUser?.totalFollowings }} </b> following</span
          >
        </div>
        <div>
          <h3 class="text-xl font-medium">
            {{ profileUser?.userInfo?.firstName + ' ' + profileUser?.userInfo?.lastName }}
          </h3>
          <p>{{ profileUser?.userInfo?.bio }}</p>
        </div>
      </div>
    </div>
    <div v-else class="mb-10">
      <Skeleton avatar :paragraph="{ rows: 4 }" />
    </div>
    <!-- Post -->
    <div>
      <h2 class="mb-4 text-xl text-center uppercase">Posts</h2>
      <div v-if="!isLoading">
        <div class="flex flex-col gap-5 px-20" v-if="userPost.length > 0">
          <PostItem v-for="post in userPost" :key="post.id" :post="post" />
        </div>
        <div v-else class="flex flex-col items-center justify-center gap-3 p-10">
          <PostIcon />
          <h3 class="text-2xl font-medium">Share Photos</h3>
          <p class="text-sm">When you share photos, they will appear on your profile.</p>
        </div>
      </div>
      <div v-else>
        <Skeleton />
      </div>
    </div>
  </div>
  <!-- modal edit profile -->
  <ModalEditProfile ref="modalEditProfileRef" />
  <!-- modal follower -->
  <ModalFollower ref="modalFollowerRef" />
  <!-- modal following -->
  <ModalFollowing ref="modalFollowingRef" />
</template>
