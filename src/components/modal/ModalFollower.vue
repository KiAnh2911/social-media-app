<script setup>
import apiServices from '@/domain/api-services'
import { Modal } from 'ant-design-vue'
import FollowerIcon from '../icons/FollowerIcon.vue'
import { ref } from 'vue'
import CardFollow from '../CardFollow.vue'

defineExpose({ show })

const showModalFollower = ref(false)
const listFollower = ref([])

function show({ id }) {
  showModalFollower.value = true
  fetchFollowers(id)
}

async function fetchFollowers(id) {
  try {
    const { data } = await apiServices.getFollower(id)
    listFollower.value = data
  } catch (error) {
    console.log('error', error)
  }
}
</script>

<template>
  <Modal v-model:open="showModalFollower" title="Followers" footer>
    <div v-if="listFollower.length > 0">
      <div v-for="follower in listFollower" :key="follower.id">
        <CardFollow :follow="follower" type="follower" />
      </div>
    </div>
    <div v-else class="flex flex-col items-center justify-center gap-3 py-10">
      <FollowerIcon />
      <div class="text-2xl font-semibold">Followers</div>
      <p class="text-sm">You'll see all the people who follow you here.</p>
    </div>
  </Modal>
</template>
