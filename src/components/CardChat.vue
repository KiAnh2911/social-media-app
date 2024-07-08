<script setup>
const { message } = defineProps(['message'])
</script>

<template>
  <div
    class="flex gap-3 container_message"
    :class="message.sender.username === 'anhhv71' ? 'container_message__me' : ''"
  >
    <div class="message-avatar" v-if="message.sender.username !== 'anhhv71'">
      <div>
        <div class="w-8 h-8">
          <img
            :src="message.sender.avatar"
            alt="avatar"
            class="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
    <div class="group_message">
      <h3 class="mb-1 text-xs">
        {{ message.sender.username === 'anhhv71' ? '' : message.sender.fullname }}
      </h3>
      <div id="1258356804494835712">
        <div class="group_message__item">
          <div class="message__content">
            <div
              class="message__text"
              :style="
                message.sender.username === 'anhhv71' ? 'color: #fff ; background: #069255;' : ''
              "
            >
              {{ message.text }}
            </div>

            <div class="message__reaction">
              <div class="quick-reaction quick-reaction--show">
                <div class="quick-reaction-item">
                  <span aria-label="" class="emoji-mart-emoji emoji-mart-emoji-custom"
                    ><span
                      style="
                        width: 18px;
                        height: 18px;
                        display: inline-block;
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center center;
                      "
                      :style="
                        message.reactions
                          ? 'background-image: url(/public/images/reactions_love.png)'
                          : 'background-image: url(/public/images/quick_reaction.png)'
                      "
                    ></span
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div class="message__more_action">
            <div class="ic-more ic-more--reaction">
              <svg width="22" height="22" viewBox="0 0 33 33" fill="none" class="popFilSosStyle">
                <rect width="32.5413" height="32.5413" rx="16.2707" fill="#F2F2F7"></rect>
                <g>
                  <path
                    d="M25.2678 14.2319C26.2441 15.2082 26.2441 16.7911 25.2678 17.7674C24.2915 18.7437 22.7085 18.7437 21.7322 17.7674C20.7559 16.7911 20.7559 15.2082 21.7322 14.2319C22.7085 13.2555 24.2915 13.2555 25.2678 14.2319Z"
                    fill="#999999"
                  ></path>
                  <path
                    d="M17.7677 14.2319C18.7441 15.2082 18.7441 16.7911 17.7677 17.7674C16.7914 18.7437 15.2085 18.7437 14.2322 17.7674C13.2559 16.7911 13.2559 15.2082 14.2322 14.2319C15.2085 13.2555 16.7914 13.2555 17.7677 14.2319Z"
                    fill="#999999"
                  ></path>
                  <path
                    d="M10.2678 14.2319C11.2441 15.2082 11.2441 16.7911 10.2678 17.7674C9.29145 18.7437 7.70854 18.7437 6.73223 17.7674C5.75592 16.7911 5.75592 15.2082 6.73223 14.2319C7.70854 13.2555 9.29145 13.2555 10.2678 14.2319Z"
                    fill="#999999"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="20" fill="white" transform="translate(6 6)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container_message__me {
  flex-direction: row-reverse;
}

.container_message .group_message {
  width: 80%;
  display: flex;
  flex-direction: column;
  flex: 1 1;
}

.container_message .message__text {
  background-color: #f3f2f8;
  color: #000;
  border-radius: 10px;
  padding: 6px 12px;
  margin: 2px 0 0;
  word-break: break-word;
  width: 100%;
}
.container_message .group_message__item {
  position: relative;
  display: flex;
  flex-direction: row;
}
.group_message__item:hover .message__more_action {
  display: flex;
}

.container_message .message__content {
  position: relative;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: text;
}

.message__reaction {
  padding: 0 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  position: relative;
  width: 100%;
}

.container_message__me .group_message__item {
  -webkit-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.quick-reaction {
  position: relative;
  top: -8px;
}
.quick-reaction .quick-reaction-item {
  padding: 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14901960784313725);
  cursor: pointer;
  height: 24px;
  background: #fff;
  position: relative;
  border-radius: 50px;
  display: flex;
  align-items: center;
  width: 100%;
}

.quick-reaction .emoji-mart-emoji-custom {
  display: flex;
}

.emoji-mart-emoji {
  position: relative;
  display: inline-block;
  font-size: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  box-shadow: none;
}

.message__more_action {
  cursor: pointer;
  display: none;
  align-items: center;
  margin: 0 8px;
}

.container_message .group_message__item:hover .ic-more {
  visibility: visible;
}

.message__more_action .ic-more--reaction {
  margin-top: -20px;
}
</style>
