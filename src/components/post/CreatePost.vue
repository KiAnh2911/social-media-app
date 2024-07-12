<script setup>
import apiServices from '@/domain/api-services'
import { fileToBase64 } from '@/utils/convertFileBase64'
import { message, Modal } from 'ant-design-vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const showModalCreatePost = ref(false)
const showAddImage = ref(false)
const user = JSON.parse(localStorage.getItem('user'))
const content = ref('')
const imagePost = ref([])
const router = useRouter()

const showCreatePost = () => {
  showModalCreatePost.value = !showModalCreatePost.value
}

const handleShowAddImage = () => {
  showAddImage.value = !showAddImage.value
}

const handleOnchange = (e) => {
  imagePost.value.push(e.target.files[0])
}

const handleOk = async () => {
  try {
    const fileList = await Promise.all(
      imagePost.value.map(async (image) => await fileToBase64(image))
    )
    console.log('fileList', fileList)
    const data = {
      userId: user.id,
      content: content.value,
      fileString: fileList
    }
    const response = await apiServices.createPost(data)

    if (response.data) {
      message.success('You create post successfully')
      router.go(0)
    }
  } catch (error) {
    console.log('error', error)
  } finally {
    showModalCreatePost.value = !showModalCreatePost.value
    showAddImage.value = false
    content.value = ''
    imagePost.value = []
  }
}

watch(content, (newVal) => {
  const editor = document.querySelector('.ql-editor')
  if (newVal.trim() === '') {
    editor.classList.add('ql-blank')
  } else {
    editor.classList.remove('ql-blank')
  }
})
</script>

<template>
  <div class="gnews-create-post">
    <div class="gnews-create-post-info">
      <div class="avatar-channel-wraper">
        <span class="w-12 h-12 text-xl rounded-full" style="background-color: rgb(6, 146, 85)">
          <img
            :src="user.profile_pic_url"
            alt="avatar-post"
            class="object-cover w-full h-full rounded-full"
          />
        </span>
      </div>
      <div class="gnews-create-post-info__text" @click="showCreatePost">
        {{ user.lastName }} ơi, bạn đang suy nghĩ gì thế?
      </div>
    </div>
  </div>
  <Modal v-model:open="showModalCreatePost" title="Create post" @ok="handleOk" footer>
    <div class="flex items-center gap-5 mb-5">
      <div class="w-12 h-12 text-xl rounded-full" style="background-color: rgb(6, 146, 85)">
        <img
          :src="user.profile_pic_url"
          alt="avatar-post"
          class="object-cover w-full h-full rounded-full"
        />
      </div>
      <h3 class="text-xl font-medium">{{ user.firstName + ' ' + user.lastName }}</h3>
    </div>
    <div class="modal-create-new__content">
      <div class="ql-container ql-snow">
        <div
          class="outline-none ql-editor ql-blank"
          contenteditable="true"
          aria-owns="quill-mention-list"
          :data-placeholder="user.lastName + ' ơi, bạn đang suy nghĩ gì thế?'"
          @input="content = $event.target.innerText"
        ></div>
      </div>
      <label for="photo" v-if="showAddImage">
        <div class="create-new-attachment">
          <div class="create-new-attachment-add" v-if="imagePost">
            <div class="create-new-attachment-add__icon">
              <svg
                width="28"
                height="28"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                xml:space="preserve"
                class=""
              >
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
            </div>
            <div class="create-new-attachment-add__title">Thêm ảnh/video</div>
            <div class="create-new-attachment-add__sub-title">Hoặc kéo và thả</div>
          </div>
          <div class="flex flex-col gap-3" v-else>
            <div class="w-full" v-for="n in 2" :key="n">
              <img
                src="https://cache.giaohangtietkiem.vn/d/2393fd218529788870aacaf48d9329a9.png?width=500"
                alt=""
              />
            </div>
          </div>
          <div class="create-new-attachment-action">
            <div class="create-new-attachment-action__update" v-if="!imagePost">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                <path
                  d="M10.5 3.5L14.5 7.5M13 16H19M1 16.9998H5L15.5 6.49981C15.7626 6.23717 15.971 5.92537 16.1131 5.58221C16.2553 5.23905 16.3284 4.87125 16.3284 4.49981C16.3284 4.12838 16.2553 3.76058 16.1131 3.41742C15.971 3.07426 15.7626 2.76246 15.5 2.49981C15.2374 2.23717 14.9256 2.02883 14.5824 1.88669C14.2392 1.74455 13.8714 1.67139 13.5 1.67139C13.1286 1.67139 12.7608 1.74455 12.4176 1.88669C12.0744 2.02883 11.7626 2.23717 11.5 2.49981L1 12.9998V16.9998Z"
                  stroke="#00904A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              Chỉnh sửa
            </div>
            <div class="create-new-attachment-action__update" v-if="!imagePost">
              <svg
                width="28"
                height="28"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                xml:space="preserve"
                class=""
              >
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
              Thêm ảnh/video
            </div>
          </div>
          <div class="create-new-attachment__remove" @click="handleShowAddImage">
            <span role="img" aria-label="close" class="anticon anticon-close">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <input
          multiple=""
          type="file"
          name="photo"
          @input="handleOnchange"
          id="photo"
          accept=".gif,.jpg,.jpeg,.png,image/*,video/mp4,video/x-m4v,video/*"
          style="display: none"
        />
      </label>
    </div>
    <div class="create-post-menu">
      <div
        class="create-post-menu__item create-post-menu__item--disable"
        @click="handleShowAddImage"
      >
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
      <div class="create-post-menu__item create-post-menu__item--disable">
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
    </div>
    <div class="modal-create-new__footer" :class="content === '' ? 'disabled' : ''">
      <button
        type="button"
        class="modal-create-new__footer--btn"
        :class="content === '' ? 'cursor-not-allowed ' : ''"
        @click="handleOk"
      >
        <span>Đăng bài viết</span>
      </button>
    </div>
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

.modal-create-new__content {
  padding: 0 7px 0 0;
  overflow-x: hidden;
  max-height: 50vh;
  margin-right: 1px;
}

/* content */
.ql-container {
  border: none;
  width: 100%;
}
.ql-editor {
  margin-right: 0;
  margin-bottom: 20px;
  padding: 0 10px 0 0;
  font-size: 16px;
  max-height: none;
  border: none;
  overflow-y: auto;
  tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.ql-editor.ql-blank:before {
  color: rgba(0, 0, 0, 0.6);
  content: attr(data-placeholder);
  font-style: italic;
  left: 25px;
  pointer-events: none;
  position: absolute;
  right: 20px;
}
/* file image */
.create-new-attachment {
  border: 1px solid rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 6px;
  position: relative;
  margin-bottom: 10px;
}
.create-new-attachment .create-new-attachment-add {
  background: hsla(0, 0%, 68.2%, 0.30980392156862746);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  cursor: pointer;
}
.create-new-attachment:hover .create-new-attachment-action {
  visibility: visible;
}

.create-new-attachment .create-new-attachment-action {
  position: absolute;
  top: 14px;
  left: 16px;
  display: flex;
  align-items: center;
  grid-gap: 10px;
  gap: 10px;
  transition: all 0.2s;
  visibility: hidden;
}

.create-new-attachment .create-new-attachment-action .create-new-attachment-action__update {
  display: flex;
  align-items: center;
  gap: 5px;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 2px 4px;
  cursor: pointer;
}

.create-new-attachment .create-new-attachment__remove {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 14px;
  right: 16px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
/* create-post-menu */
.create-post-menu {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid hsla(0, 0%, 47.8%, 0.25882352941176473);
}
.create-post-menu__item {
  width: calc(50% - 5px);
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
}
.create-post-menu__item:first-child {
  border-right: 1px solid hsla(0, 0%, 47.8%, 0.25882352941176473);
  padding-right: 5px;
  margin-right: 5px;
}
.modal-create-new__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00904a;
  border-radius: 8px;
  margin-top: 20px;
}
.modal-create-new__footer.disabled {
  background: #aeaeae;
  cursor: not-allowed;
}
.modal-create-new__footer--btn {
  flex: 1 1;
  color: #fff;
  border-radius: 5px;
  height: 48px;
  line-height: 1;
  font-size: 20px;
}
</style>
