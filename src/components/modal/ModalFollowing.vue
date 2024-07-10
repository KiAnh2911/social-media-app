<script setup>
import { ref } from 'vue'
import { Modal } from 'ant-design-vue'
import CardFollow from '../CardFollow.vue'
import FollowerIcon from '../icons/FollowerIcon.vue'
import apiServices from '@/domain/api-services'

defineExpose({ show })

const showModalFollowing = ref(false)
const listFollowing = ref([])

function show({ id }) {
  console.log('id', id)
  showModalFollowing.value = true
  fetchApiFollowing(id)
}

async function fetchApiFollowing(userId) {
  try {
    const { data } = await apiServices.getFollowing(userId)
    listFollowing.value = data
  } catch (error) {
    console.log('error', error)
  }
}
</script>

<template>
  <Modal v-model:open="showModalFollowing" title="Following" footer>
    <div v-if="listFollowing.length > 0">
      <div v-for="following in listFollowing" :key="following.id">
        <CardFollow :follow="following" type="following" />
      </div>
    </div>
    <div v-else class="flex flex-col items-center justify-center gap-3 py-10">
      <FollowerIcon />
      <div class="text-2xl font-semibold">People you follow</div>
      <p class="text-sm">Once you follow people, you'll see them here.</p>
    </div>
  </Modal>
</template>
