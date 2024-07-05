<script setup>
import { reactive } from 'vue'

const userProfile = reactive({})
const userPost = reactive([])
</script>

<template>
  <div class="max-w-[900px] mx-auto">
    <div class="flex items-start justify-between gap-20">
      <div class="w-[220px] h-[220px]">
        <img
          src="https://images.pexels.com/photos/26741269/pexels-photo-26741269/free-photo-of-a-woman-in-leather-boots-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
          class="object-cover w-full h-full rounded-full"
        />
      </div>
      <div class="flex flex-col flex-1 gap-5">
        <div class="flex gap-5">
          <h3>user bio profile</h3>
          <button>Edit profile</button>
        </div>
        <div class="flex gap-5">
          <span> <b class="text-xl"> 0 </b> post</span>
          <span> <b class="text-xl"> 0 </b> followers</span>
          <span> <b class="text-xl"> 0 </b> following</span>
        </div>
        <div>
          <h3>UserName</h3>
          <p>bio</p>
        </div>
      </div>
    </div>
    <div>post</div>
  </div>
</template>
