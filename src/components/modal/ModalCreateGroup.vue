<script setup>
import apiServices from '@/domain/api-services'
import { Modal } from 'ant-design-vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

defineExpose({ show })

const showModalCreateGroup = ref(false)
const listUser = ref([])
const group = ref({
  roomMeesageName: '',
  participantIds: []
})

const router = useRouter()

function show() {
  showModalCreateGroup.value = true
}

const handleCreateGroupChat = async () => {
  try {
    const { data } = await apiServices.addGroupMessageChat(group.value)
    console.log('Selected User IDs:', data)
    router.go(0)
  } catch (error) {
    console.log('error', error)
  }
}

onMounted(async () => {
  try {
    const { data } = await apiServices.getAllUser()
    listUser.value = data
  } catch (error) {
    console.log('error', error)
  }
})
</script>

<template>
  <Modal v-model:open="showModalCreateGroup" title="Tạo chat" footer>
    <div class="h-[80vh] overflow-hidden flex flex-col gap-10 justify-between">
      <div class="h-10 mt-5">
        <input
          type="text"
          placeholder="Group name"
          v-model="group.roomMeesageName"
          class="w-full h-full p-3 border rounded-md outline-none"
        />
      </div>

      <div class="flex-1 overflow-y-auto">
        <div class="flex justify-between mb-5" v-for="user in listUser" :key="user.id">
          <div class="flex items-center gap-5">
            <div class="w-12 h-12 rounded-full">
              <img
                :src="
                  user?.profile_pic_url
                    ? user?.profile_pic_url
                    : '/public/images/avatar-default.png'
                "
                alt="avatar-user"
                class="object-cover w-full h-full rounded-full"
              />
            </div>
            <h3 class="text-lg font-medium">{{ user.firstName + ' ' + user.lastName }}</h3>
          </div>
          <input type="checkbox" :value="user.id" id="" v-model="group.participantIds" />
        </div>
      </div>

      <div
        class="flex justify-center h-12 px-3 py-2 text-lg text-center text-white rounded-lg cursor-pointer footer"
        :class="
          group.roomMeesageName === '' && group.participantIds.length == 0
            ? 'cursor-not-allowed bg-slate-300'
            : 'bg-[#14a05b]'
        "
        @click="handleCreateGroupChat"
      >
        Thêm chat mới
      </div>
    </div>
  </Modal>
</template>
