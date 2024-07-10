<script setup>
import apiServices from '@/domain/api-services'
import { cloneDeep } from 'lodash'
// import { fileToBase64 } from '@/utils/convertFileBase64'
import { message, Modal } from 'ant-design-vue'
import { ref } from 'vue'

defineExpose({ show })

// const props = defineProps(['profile'])
// const emit = defineEmits(['updateDate'])

const showModalProfile = ref(false)
const editProfile = ref({
  userInfo: {
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    username: '',
    gender: ''
  }
})

function show({ profile }) {
  showModalProfile.value = true
  editProfile.value = cloneDeep(profile)
}

// function updateData() {
//   emit('updateDate', )
// }

const handleSubmit = async () => {
  try {
    // const file = await fileToBase64(image.value)

    const data = {
      // file,
      firstName: editProfile.value.userInfo.firstName,
      lastName: editProfile.value.userInfo.lastName,
      bio: editProfile.value.userInfo.bio,
      gender: editProfile.value.userInfo.gender
    }
    console.log('data', data.file)

    const res = await apiServices.editProfile(data)
    if (res) {
      message.success('You updated successfully')
    }
    showModalProfile.value = false
  } catch (error) {
    message.error(error.response.data.error)
  }
}
</script>

<template>
  <Modal v-model:open="showModalProfile" title="Edit profile" @ok="handleSubmit" destroyOnClose>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
      <div class="flex items-center justify-between px-5 py-3 rounded-lg bg-slate-200">
        <div class="flex items-center gap-3">
          <div class="border rounded-full w-14 h-14" style="background-color: rgb(6, 146, 85)">
            <img
              :src="editProfile?.userInfo?.profile_pic_url"
              :alt="editProfile?.userInfo?.profile_pic_url"
              class="object-cover w-full h-full rounded-full"
            />
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-medium">{{ editProfile?.userInfo?.username }}</h3>
            <p>
              {{ editProfile?.userInfo?.firstName + ' ' + editProfile?.userInfo?.lastName }}
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
          v-model="editProfile.userInfo.email"
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
          v-model="editProfile.userInfo.username"
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
          v-model="editProfile.userInfo.firstName"
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
          v-model="editProfile.userInfo.lastName"
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
          v-model="editProfile.userInfo.bio"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="song de cong hien"
        />
      </div>
      <div class="flex items-center gap-5">
        <label for="gender">Gender</label>
        <select id="gender" v-model="editProfile.userInfo.gender" class="flex-1 p-2">
          <option value="" disabled>Chọn giới tính</option>
          <option value="Male">Nam</option>
          <option value="Female">Nữ</option>
        </select>
      </div>
    </form>
  </Modal>
</template>
