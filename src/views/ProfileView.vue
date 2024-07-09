<script setup>
import { onBeforeMount, reactive, ref } from 'vue'
import PostItem from '@/components/post/PostItem.vue'
import apiServices from '@/domain/api-services'
import { message, Modal, Skeleton } from 'ant-design-vue'

const isLoading = ref(false)
const showModalProfile = ref(false)
const userPost = reactive([])
const image = ref({})
const userProfile = ref({})
const originalUserProfile = ref({})
const { id } = JSON.parse(localStorage.getItem('user'))

console.log('userPost', userPost)

const handleOnchangeImage = (e) => {
  console.log('e', e)
  let files = e.target.files || e.dataTransfer.files
  if (!files.length) return
  image.value = files[0]
}

const handleShowModalProfile = () => {
  originalUserProfile.value = JSON.parse(JSON.stringify(userProfile.value))
  showModalProfile.value = !showModalProfile.value
}

const handleSubmit = async () => {
  try {
    const data = {
      file: JSON.stringify(image.value),
      firstName: userProfile.value.userInfo.firstName,
      lastName: userProfile.value.userInfo.lastName,
      bio: userProfile.value.userInfo.bio,
      gender: userProfile.value.userInfo.gender
    }
    console.log('data', data.file)
    const res = await apiServices.editProfile(data)
    showModalProfile.value = false
    if (res) {
      message.success('You updated successfully')
    }
  } catch (error) {
    message.error(error.response.data.error)
  }
}

const handleCancel = () => {
  userProfile.value = JSON.parse(JSON.stringify(originalUserProfile.value))
  showModalProfile.value = false
}

onBeforeMount(async () => {
  try {
    isLoading.value = true
    const { data } = await apiServices.getProfile(id)
    userProfile.value = data
  } catch (error) {
    message.error(error.response.data.error)
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
          <button
            class="px-3 py-1 text-sm text-black bg-gray-300 rounded-md"
            @click="handleShowModalProfile"
          >
            Edit profile
          </button>
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
  <!-- modal edit profile -->
  <Modal
    v-model:open="showModalProfile"
    title="Edit profile"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
      <div class="flex items-center justify-between px-5 py-3 rounded-lg bg-slate-200">
        <div class="flex items-center gap-3">
          <div class="border rounded-full w-14 h-14" style="background-color: rgb(6, 146, 85)">
            <img
              :src="userProfile.userInfo?.profile_pic_url"
              :alt="userProfile.userInfo?.profile_pic_url"
              class="object-cover w-full h-full rounded-full"
            />
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-medium">{{ userProfile.userInfo?.username }}</h3>
            <p>
              {{ userProfile.userInfo?.firstName + ' ' + userProfile.userInfo?.lastName }}
            </p>
          </div>
        </div>

        <label
          for="image"
          class="px-2 py-1 text-sm font-semibold text-white bg-blue-500 rounded-md"
        >
          <span> Change photo </span>
          <input
            type="file"
            name="photo"
            id="image"
            @change="handleOnchangeImage"
            accept=".gif,.jpg,.jpeg,.png,image/*,video/mp4,video/x-m4v,video/*"
            style="display: none"
          />
        </label>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          v-model="userProfile.userInfo.email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          readonly
        />
      </div>
      <div>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          v-model="userProfile.userInfo.username"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="nguyenvana22"
          readonly
        />
      </div>
      <div>
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          v-model="userProfile.userInfo.firstName"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="nguyen van"
        />
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          v-model="userProfile.userInfo.lastName"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="nam"
        />
      </div>
      <div>
        <label
          htmlFor="bio"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Bio
        </label>
        <input
          type="text"
          id="bio"
          v-model="userProfile.userInfo.bio"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="song de cong hien"
        />
      </div>
      <div class="flex items-center gap-5">
        <label for="gender">Gender</label>
        <select id="gender" v-model="userProfile.userInfo.gender" class="flex-1 p-2">
          <option value="" disabled>Chọn giới tính</option>
          <option value="Male">Nam</option>
          <option value="Female">Nữ</option>
        </select>
      </div>
    </form>
  </Modal>
</template>
