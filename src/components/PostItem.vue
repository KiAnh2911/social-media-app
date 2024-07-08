<script setup>
import { Modal } from 'ant-design-vue'
import { ref } from 'vue'

const openModalComment = ref(false)

const showComment = () => {
  openModalComment.value = !openModalComment.value
}

const handleOk = () => {}

// const editorConfig = {
//   toolbar: [['Bold']]
// }
</script>

<template>
  <div class="post-news-item">
    <div class="item-post-header">
      <div class="item-post-author">
        <div class="item-post-author__avatar">
          <div class="avatar-channel-wraper">
            <span class="w-12 h-12 text-xl rounded-full" style="background-color: rgb(6, 146, 85)"
              ><img
                src="https://cache.giaohangtietkiem.vn/d/1bddc740cd00e8d8c7a5cbcd1b61b168.png?width=58"
                alt="avatar-channel"
                class="object-cover w-full h-full rounded-full"
            /></span>
          </div>
        </div>
        <div class="item-post-author__name">
          <div class="mb-1 text-sm font-medium">GHTK Pika</div>
          <div class="text-xs text-[#7a7a7a]">Hôm nay, 10:32</div>
        </div>
      </div>
      <div class="post-news-action">
        <div class="action-more-post__item">
          <svg height="18" viewBox="0 -10 511.98685 511" width="18">
            <path
              d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <!-- content -->
    <div>
      <div class="post-news--category">GÓC LEAK TINNN</div>
      <div class="post-news-tags"></div>
      <div class="item-post-content item-post-news-content">
        <div class="text-wrapper" style="max-height: 152px; overflow: hidden">
          <div style="overflow-wrap: break-word">
            <p>
              <strong>🔥 Một cuộc đua phục vụ Brand sắp diễn ra!</strong><br />
              💪 Nhằm ghi nhận sự nỗ lực và đóng góp của các thành viên trong việc phục vụ Brand tốt
              hơn mỗi ngày! <br />
              <br />
              <strong>🔥 Anh em cùng chờ đón tại bản app mới nhất!</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="post-media">
        <div
          class="attachment-new-list attachment-new-list--single"
          style="grid-template-areas: 'attachmentFirst'"
        >
          <div class="attachment-new-item attachment-new-item-1">
            <div class="attachment-new-item-wrapper">
              <img
                src="https://cache.giaohangtietkiem.vn/d/12aefd6995ed97cb733ba75d7bb7c8c9.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div>
      <div class="dynamic-news">
        <div class="dynamic-news-params">
          <div class="cursor-pointer post-params">
            <div class="flex items-center">
              <div class="flex gap-2">
                <div class="new-reaction-item">
                  <span class="new-reaction-item__content"
                    ><span aria-label="" class="emoji-mart-emoji emoji-mart-emoji-custom"
                      ><span
                        style="
                          width: 20px;
                          height: 20px;
                          display: inline-block;
                          background-image: url('/public/images/reactions_love.png');
                          background-size: contain;
                          background-repeat: no-repeat;
                          background-position: center center;
                        "
                      ></span></span
                  ></span>
                </div>
                <div class="new-reaction-item new-reaction-item__count">
                  <span class="new-reaction-item__content"
                    ><div class="new-reaction-item__content--count">21</div></span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="post-params un-visible">0 bình luận</div>
        </div>
        <div class="dynamic-news__action">
          <button type="button" class="dynamic-action-item dynamic-action-item--like">
            <span style="margin-right: 8px">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="heart"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
                ></path>
              </svg>
            </span>
            <span>Yêu thích</span>
          </button>
          <button type="button" class="dynamic-action-item" @click="showComment">
            <span style="margin-right: 8px">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="message"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                ></path>
              </svg>
            </span>
            <span>Bình luận</span>
          </button>
          <button type="button" class="dynamic-action-item" disabled>
            <svg width="16" height="20" viewBox="0 0 22 20" fill="none" style="margin-right: 8px">
              <path
                d="M12.2222 6.00435H13.2222V5.00435V1.13323L20.9829 9.3821L13.2222 17.631V13.7612V12.7612H12.2222H10.7702C6.64188 12.7612 2.92807 15.0526 1 18.7382V17.2015C1 11.0064 5.92013 6.00435 11.9167 6.00435H12.2222Z"
                stroke="black"
                stroke-width="2"
              ></path>
            </svg>
            <span>Chia sẻ</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal comment -->
  <Modal
    v-model:open="openModalComment"
    width="920px"
    title="Bài viết"
    @ok="handleOk"
    :footer="null"
    closable
  >
    <div class="overflow-y-auto h-[70vh]">
      <div class="item-post-header">
        <div class="item-post-author">
          <div class="item-post-author__avatar">
            <div class="avatar-channel-wraper">
              <span class="w-12 h-12 text-xl rounded-full" style="background-color: rgb(6, 146, 85)"
                ><img
                  src="https://cache.giaohangtietkiem.vn/d/1bddc740cd00e8d8c7a5cbcd1b61b168.png?width=58"
                  alt="avatar-channel"
                  class="object-cover w-full h-full rounded-full"
              /></span>
            </div>
          </div>
          <div class="item-post-author__name">
            <div class="mb-1 text-sm font-medium">GHTK Pika</div>
            <div class="text-xs text-[#7a7a7a]">Hôm nay, 10:32</div>
          </div>
        </div>
        <div class="post-news-action">
          <div class="action-more-post__item">
            <svg height="18" viewBox="0 -10 511.98685 511" width="18">
              <path
                d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- content -->
      <div>
        <div class="post-news--category">GÓC LEAK TINNN</div>
        <div class="post-news-tags"></div>
        <div class="item-post-content item-post-news-content">
          <div class="text-wrapper" style="max-height: 152px; overflow: hidden">
            <div style="overflow-wrap: break-word">
              <p>
                <strong>🔥 Một cuộc đua phục vụ Brand sắp diễn ra!</strong><br />
                💪 Nhằm ghi nhận sự nỗ lực và đóng góp của các thành viên trong việc phục vụ Brand
                tốt hơn mỗi ngày! <br />
                <br />
                <strong>🔥 Anh em cùng chờ đón tại bản app mới nhất!</strong>
              </p>
            </div>
          </div>
        </div>
        <div class="post-media">
          <div
            class="attachment-new-list attachment-new-list--single"
            style="grid-template-areas: 'attachmentFirst'"
          >
            <div class="attachment-new-item attachment-new-item-1">
              <div class="attachment-new-item-wrapper">
                <img
                  src="https://cache.giaohangtietkiem.vn/d/12aefd6995ed97cb733ba75d7bb7c8c9.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer -->
      <div>
        <div class="dynamic-news">
          <div class="dynamic-news-params">
            <div class="cursor-pointer post-params">
              <div class="flex items-center">
                <div class="flex gap-2">
                  <div class="new-reaction-item">
                    <span class="new-reaction-item__content"
                      ><span aria-label="" class="emoji-mart-emoji emoji-mart-emoji-custom"
                        ><span
                          style="
                            width: 20px;
                            height: 20px;
                            display: inline-block;
                            background-image: url('/public/images/reactions_love.png');
                            background-size: contain;
                            background-repeat: no-repeat;
                            background-position: center center;
                          "
                        ></span></span
                    ></span>
                  </div>
                  <div class="new-reaction-item new-reaction-item__count">
                    <span class="new-reaction-item__content"
                      ><div class="new-reaction-item__content--count">21</div></span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="post-params un-visible">0 bình luận</div>
          </div>
          <div class="dynamic-news__action">
            <button type="button" class="dynamic-action-item dynamic-action-item--like">
              <span style="margin-right: 8px">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="heart"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
                  ></path>
                </svg>
              </span>
              <span>Yêu thích</span>
            </button>
            <button type="button" class="dynamic-action-item" @click="showComment" disabled>
              <span style="margin-right: 8px">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="message"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                  ></path>
                </svg>
              </span>
              <span>Bình luận</span>
            </button>
            <button type="button" class="dynamic-action-item" disabled>
              <svg width="16" height="20" viewBox="0 0 22 20" fill="none" style="margin-right: 8px">
                <path
                  d="M12.2222 6.00435H13.2222V5.00435V1.13323L20.9829 9.3821L13.2222 17.631V13.7612V12.7612H12.2222H10.7702C6.64188 12.7612 2.92807 15.0526 1 18.7382V17.2015C1 11.0064 5.92013 6.00435 11.9167 6.00435H12.2222Z"
                  stroke="black"
                  stroke-width="2"
                ></path>
              </svg>
              <span>Chia sẻ</span>
            </button>
          </div>
        </div>
      </div>
      <!-- add comment and list comment -->
      <div class="item-post-comment">
        <!-- <ckeditor></ckeditor> -->
      </div>
    </div>
  </Modal>
</template>

<style scoped>
.post-news-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
}
.item-post-header {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0;
  margin-bottom: 10px;
}
.item-post-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.post-news-action {
  cursor: pointer;
  display: flex;
  position: relative;
}

.dynamic-news-params {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin-top: 10px;
  padding: 0 20px;
}

.dynamic-news__action {
  padding: 4px 0;
  display: flex;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  justify-content: space-around;
  margin: 0 20px 4px;
  position: relative;
}
.dynamic-news__action .dynamic-action-item {
  cursor: pointer;
  width: 33%;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  height: 30px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  transition-duration: 0.2s;
}
.dynamic-news__action .dynamic-action-item:hover {
  background: #ececec;
}
</style>
