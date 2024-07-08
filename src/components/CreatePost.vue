<script setup>
import { Modal } from 'ant-design-vue'
import { ref } from 'vue'

const showModalCreatePost = ref(false)

const showCreatePost = () => {
  showModalCreatePost.value = !showModalCreatePost.value
}

const handleOk = () => {}
</script>

<template>
  <div class="gnews-create-post">
    <div class="gnews-create-post-info">
      <div class="avatar-channel-wraper">
        <span class="w-12 h-12 text-xl rounded-full" style="background-color: rgb(6, 146, 85)"
          ><img
            src="https://cache.giaohangtietkiem.vn/d/390e481d413dd6c06b97f9430e5f6dbe.jpg?width=58"
            alt="avatar-post"
            class="object-cover w-full h-full rounded-full"
        /></span>
      </div>
      <div class="gnews-create-post-info__text" @click="showCreatePost">
        Văn Anh ơi, bạn đang suy nghĩ gì thế?
      </div>
    </div>
    <!-- <div class="create-post-menu">
      <div class="create-post-menu__item">
        <svg width="28" height="28" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve" class="">
          <g>
            <g xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="m6.25 19.5c-1.601 0-3.025-1.025-3.542-2.551l-.035-.115c-.122-.404-.173-.744-.173-1.084v-6.818l-2.426 8.098c-.312 1.191.399 2.426 1.592 2.755l15.463 4.141c.193.05.386.074.576.074.996 0 1.906-.661 2.161-1.635l.901-2.865z"
                  fill="#41904c"
                  data-original="#000000"
                  class=""
                ></path>
              </g>
              <path
                d="m9 9c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2z"
                fill="#41904c"
                data-original="#000000"
                class=""
              ></path>
            </g>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="m21.5 2h-15c-1.378 0-2.5 1.122-2.5 2.5v11c0 1.378 1.122 2.5 2.5 2.5h15c1.378 0 2.5-1.122 2.5-2.5v-11c0-1.378-1.122-2.5-2.5-2.5zm-15 2h15c.276 0 .5.224.5.5v7.099l-3.159-3.686c-.335-.393-.82-.603-1.341-.615-.518.003-1.004.233-1.336.631l-3.714 4.458-1.21-1.207c-.684-.684-1.797-.684-2.48 0l-2.76 2.759v-9.439c0-.276.224-.5.5-.5z"
              fill="#41904c"
              data-original="#000000"
            ></path>
          </g>
        </svg>
        <div>Ảnh/video</div>
      </div>
      <div class="create-post-menu__item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9.42679H0.858577C0.386611 9.42679 0.00502092 9.80838 0 10.2854V23.1389C0 23.6159 0.386611 23.9975 0.858577 23.9975H6C6.47699 23.9975 6.85858 23.6109 6.85858 23.1389V10.2854C6.85858 9.80838 6.47197 9.42679 6 9.42679Z"
            fill="#00904A"
          ></path>
          <path
            d="M14.5703 0.00250244H9.42889C8.95692 0.00250244 8.57031 0.384092 8.57031 0.856059V23.1389C8.57031 23.6159 8.95692 23.9975 9.42889 23.9975H14.5703C15.0473 23.9975 15.4289 23.6109 15.4289 23.1389V0.86108C15.4289 0.384092 15.0423 0.00250244 14.5703 0.00250244Z"
            fill="#00904A"
          ></path>
          <path
            d="M23.1416 6.85608H18.0002C17.5232 6.85608 17.1416 7.23767 17.1416 7.71466V23.1389C17.1416 23.6159 17.5282 23.9975 18.0002 23.9975H23.1416C23.6186 23.9975 24.0002 23.6109 24.0002 23.1389V7.71466C24.0002 7.23767 23.6136 6.85608 23.1416 6.85608Z"
            fill="#00904A"
          ></path>
        </svg>
        <div>Bình chọn</div>
      </div>
      <div class="create-post-menu__item">
        <svg width="36" height="26" viewBox="0 0 36 26" fill="none">
          <path
            d="M1.5 4.66683C1.5 3.78277 1.88631 2.93493 2.57394 2.30981C3.26158 1.68469 4.19421 1.3335 5.16667 1.3335H30.8333C31.8058 1.3335 32.7384 1.68469 33.4261 2.30981C34.1137 2.93493 34.5 3.78277 34.5 4.66683V21.3335C34.5 22.2176 34.1137 23.0654 33.4261 23.6905C32.7384 24.3156 31.8058 24.6668 30.8333 24.6668H5.16667C4.19421 24.6668 3.26158 24.3156 2.57394 23.6905C1.88631 23.0654 1.5 22.2176 1.5 21.3335V4.66683Z"
            stroke="#00904A"
            stroke-width="1.83333"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 18V11.3333C9 10.4493 9.36875 9.60143 10.0251 8.97631C10.6815 8.35119 11.5717 8 12.5 8C13.4283 8 14.3185 8.35119 14.9749 8.97631C15.6313 9.60143 16 10.4493 16 11.3333V18"
            stroke="#00904A"
            stroke-width="1.83333"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.8335 14.6665H16.1668"
            stroke="#00904A"
            stroke-width="1.83333"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M27.1665 8V18H24.4165C23.8726 18 23.3409 17.8534 22.8887 17.5787C22.4365 17.304 22.084 16.9135 21.8758 16.4567C21.6677 15.9999 21.6132 15.4972 21.7193 15.0123C21.8255 14.5273 22.0874 14.0819 22.472 13.7322C22.8566 13.3826 23.3466 13.1445 23.88 13.048C24.4135 12.9516 24.9664 13.0011 25.4689 13.1903C25.9714 13.3795 26.4009 13.7 26.703 14.1111C27.0052 14.5222 27.1665 15.0055 27.1665 15.5"
            stroke="#00904A"
            stroke-width="1.83333"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div>Màu nền</div>
      </div>
    </div> -->
  </div>
  <Modal v-model:open="showModalCreatePost" title="Create post" @ok="handleOk">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
</template>

<style scoped>
.gnews-create-post {
  background: #fff;
  padding: 20px 12px;
  flex-direction: column;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
}
.gnews-create-post .gnews-create-post-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.gnews-create-post .create-post-menu {
  display: flex;
  align-items: center;
  padding: 17px 10px 0;
}

.avatar-channel-wraper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.gnews-create-post .gnews-create-post-info .gnews-create-post-info__text {
  flex: 1 1;
  background: #f5f5f5;
  border-radius: 50px;
  padding: 6px 12px;
  cursor: pointer;
  color: hsla(0, 0%, 47.8%, 0.9803921568627451);
}
</style>
