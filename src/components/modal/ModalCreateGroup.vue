<script setup>
import { Modal } from 'ant-design-vue'
import { ref } from 'vue'

const showModalCreateGroup = ref(false)

defineExpose({ show })

function show() {
  showModalCreateGroup.value = true
}

const handleCreateGroupChat = () => {
  try {
    console.log('handleCreateGroupChat')
  } catch (error) {
    console.log('error', error)
  }
}
</script>

<template>
  <Modal v-model:open="showModalCreateGroup" title="Tạo chat" footer>
    <div class="mb-5">klsfahfjka</div>

    <div
      class="flex justify-center px-3 py-2 rounded-lg text-center footer bg-[#14a05b] text-lg text-white cursor-pointer"
      @click="handleCreateGroupChat"
    >
      Thêm chat mới
    </div>
  </Modal>
</template>
