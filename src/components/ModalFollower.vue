<script setup>
import { Modal } from 'ant-design-vue'
import CardFollow from './CardFollow.vue'

const props = defineProps({
  showModalFollower: Boolean
})
</script>

<template>
  <Modal v-model:open="props.showModalFollower" title="Followers">
    <div v-for="n in 10" :key="n">
      <CardFollow />
    </div>
  </Modal>
</template>
