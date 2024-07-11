<script setup>
import moment from 'moment'

defineProps(['notification'])
</script>
<template>
  <div class="item-channel-noti" :class="notification?.read ? '' : 'item-channel-unread'">
    <div class="item_infor">
      <div class="item_avatar">
        <div class="avatar-channel-wraper">
          <span
            class="object-cover w-12 h-12 rounded-full"
            style="background-color: rgb(6, 146, 85)"
            ><img
              :src="notification?.sender?.profile_pic_url"
              :alt="notification?.sender?.profile_pic_url"
              class="object-cover w-full h-full rounded-full"
          /></span>
        </div>
        <div class="icon_noti" :class="notification?.read ? 'unactice' : ''">
          <div class="item_icon">
            <svg viewBox="0 0 24 24" fill="white" width="13px" height="13px">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="item_content">
        <div class="item_detail">
          {{ notification?.content }}
        </div>
        <div class="item_time">
          <span>{{ moment(notification?.createdAt).format('DD-MM-YYYY HH:mm') }}</span
          ><span>{{ notification?.entityType }}</span>
        </div>
        <div :class="notification?.read ? '' : 'item_unread'"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-channel-noti {
  padding-right: 30px;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  margin-bottom: 5px;
}
.item-channel-unread {
  background-color: #f3f2f8;
}
.item_infor {
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  padding: 0 9px 0 10px;
}
.avatar-channel-wraper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.item_avatar {
  position: relative;
}
.icon_noti,
.item_icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon_noti {
  position: absolute;
  bottom: -3px;
  right: -4px;
  color: #fff;
  background: #069255;
  border-radius: 50px;
  font-size: 11px;
  width: 20px;
  height: 20px;
}
.unactice {
  background: #949494 !important;
}

.item_content {
  flex: 1 1;
  overflow: hidden;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.item_infor .item_detail {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.item_infor .item_time {
  display: flex;
  justify-content: space-between;
  color: #afafaf;
  font-style: italic;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.item-channel-noti .item_detail_notify {
  display: flex;
  gap: 4px;
  align-items: center;
  flex: 1 1;
  overflow: hidden;
  word-wrap: break-word;
}

.item_infor .item_detail span {
  display: -webkit-box;
  font-weight: 600;
  line-height: 1.4;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.item_unread {
  width: 8px;
  height: 8px;
  background-color: green;
  position: absolute;
  right: 6px;
  top: 46%;
  border-radius: 20px;
}
</style>
