<script setup>
import { reactive, ref, onMounted } from 'vue'
import InfoIcon from '../icons/InfoIcon.vue'
import CardChat from '../CardChat.vue'

const messageList = [
  {
    id: '1259160822872256512',
    msg_type: 'text',
    channel_id: '5676024156913475546',
    channel_mode: 'internal',
    channel_type: 'direct',
    text: 'ok',
    status: 1,
    created_at: '2024-07-06T14:55:34.249Z',
    score: '1259160822872256512',
    ref_id: '2024-07-06T14:55:34.157Z',
    is_pin: 0,
    total_seen: 2,
    sender: {
      id: '2660362138427143064',
      user_key: 'user_777360',
      user_type: 'user',
      user_id: '777360',
      username: 'anhhv71',
      fullname: 'Hoàng Văn Anh',
      avatar: 'https://cache.giaohangtietkiem.vn/d/390e481d413dd6c06b97f9430e5f6dbe.jpg',
      status_id: 3
    },
    seen: [
      {
        timestamp: '2024-07-06T15:23:38.161Z',
        user: {
          id: '3572739293533435458',
          user_key: 'user_777055',
          user_type: 'user',
          user_id: '777055',
          username: 'giangth51',
          fullname: 'Trần Huy Giang',
          avatar: 'https://cache.giaohangtietkiem.vn/d/7bb085a442fd2a9ca885bcce1d125fb8.jpg',
          status_id: 3
        }
      },
      {
        timestamp: '2024-07-06T14:55:34.305Z',
        user: {
          id: '2660362138427143064',
          user_key: 'user_777360',
          user_type: 'user',
          user_id: '777360',
          username: 'anhhv71',
          fullname: 'Hoàng Văn Anh',
          avatar: 'https://cache.giaohangtietkiem.vn/d/390e481d413dd6c06b97f9430e5f6dbe.jpg',
          status_id: 3
        }
      }
    ]
  },
  {
    id: '1259158460174651392',
    msg_type: 'text',
    channel_id: '5676024156913475546',
    channel_mode: 'internal',
    channel_type: 'direct',
    text: 'Thế a tự map nhé',
    status: 1,
    created_at: '2024-07-06T14:46:10.938Z',
    score: '1259158460174651392',
    ref_id: '2024-07-06T14:46:09.973Z',
    is_pin: 0,
    reactions: [{ id: 1, name: 'LOVE', count: 1, me: true, score: 1259410140225319000 }],
    sender: {
      id: '3572739293533435458',
      user_key: 'user_777055',
      user_type: 'user',
      user_id: '777055',
      username: 'giangth51',
      fullname: 'Trần Huy Giang',
      avatar: 'https://cache.giaohangtietkiem.vn/d/7bb085a442fd2a9ca885bcce1d125fb8.jpg',
      status_id: 3
    }
  },
  {
    id: '1259130099784396800',
    msg_type: 'text',
    channel_id: '5676024156913475546',
    channel_mode: 'internal',
    channel_type: 'direct',
    text: 'cứ tra về như ghtk trả ý',
    status: 1,
    created_at: '2024-07-06T12:53:29.294Z',
    score: '1259130099784396800',
    ref_id: '2024-07-06T12:53:29.228Z',
    is_pin: 0,
    sender: {
      id: '2660362138427143064',
      user_key: 'user_777360',
      user_type: 'user',
      user_id: '777360',
      username: 'anhhv71',
      fullname: 'Hoàng Văn Anh',
      avatar: 'https://cache.giaohangtietkiem.vn/d/390e481d413dd6c06b97f9430e5f6dbe.jpg',
      status_id: 3
    }
  },
  {
    id: '1259031911299727360',
    msg_type: 'text',
    channel_id: '5676024156913475546',
    channel_mode: 'internal',
    channel_type: 'direct',
    text: 'Không cần nhóm theo user nữa à a',
    status: 1,
    created_at: '2024-07-06T06:23:19.335Z',
    score: '1259031911299727360',
    ref_id: '2024-07-06T06:23:18.858Z',
    is_pin: 0,
    sender: {
      id: '3572739293533435458',
      user_key: 'user_777055',
      user_type: 'user',
      user_id: '777055',
      username: 'giangth51',
      fullname: 'Trần Huy Giang',
      avatar: 'https://cache.giaohangtietkiem.vn/d/7bb085a442fd2a9ca885bcce1d125fb8.jpg',
      status_id: 3
    }
  },
  {
    id: '1258846021608681472',
    msg_type: 'text',
    channel_id: '5676024156913475546',
    channel_mode: 'internal',
    channel_type: 'direct',
    text: 'em cứ trả message làm 1 list các object nha',
    status: 1,
    created_at: '2024-07-05T18:04:39.779Z',
    score: '1258846021608681472',
    ref_id: '2024-07-05T18:04:39.717Z',
    is_pin: 0,
    sender: {
      id: '2660362138427143064',
      user_key: 'user_777360',
      user_type: 'user',
      user_id: '777360',
      username: 'anhhv71',
      fullname: 'Hoàng Văn Anh',
      avatar: 'https://cache.giaohangtietkiem.vn/d/390e481d413dd6c06b97f9430e5f6dbe.jpg',
      status_id: 3
    }
  },
  {
    id: '1258733577821282304',
    msg_type: 'text',
    channel_id: '5676024156913475546',
    channel_mode: 'internal',
    channel_type: 'direct',
    text: 'Lên đấy có gì hot ko ?',
    status: 1,
    created_at: '2024-07-05T10:37:51.091Z',
    score: '1258733577821282304',
    ref_id: '2024-07-05T10:37:50.892Z',
    is_pin: 0,
    sender: {
      id: '2660362138427143064',
      user_key: 'user_777360',
      user_type: 'user',
      user_id: '777360',
      username: 'anhhv71',
      fullname: 'Hoàng Văn Anh',
      avatar: 'https://cache.giaohangtietkiem.vn/d/390e481d413dd6c06b97f9430e5f6dbe.jpg',
      status_id: 3
    }
  },
  {
    id: '1258356804494835712',
    msg_type: 'text',
    channel_id: '5676024156913475546',
    channel_mode: 'internal',
    channel_type: 'direct',
    text: 'https://docs.google.com/spreadsheets/d/1j25-FTUgd4zk5wcNhkTx9oDMkD_MQqjyxLISqGrOT1k/edit?gid=0#gid=0',
    status: 1,
    created_at: '2024-07-04T09:40:41.330Z',
    score: '1258356804494835712',
    ref_id: '2024-07-04T09:40:41.423Z',
    is_pin: 0,
    sender: {
      id: '3572739293533435458',
      user_key: 'user_777055',
      user_type: 'user',
      user_id: '777055',
      username: 'giangth51',
      fullname: 'Trần Huy Giang',
      avatar: 'https://cache.giaohangtietkiem.vn/d/7bb085a442fd2a9ca885bcce1d125fb8.jpg',
      status_id: 3
    }
  },
  {
    id: '1258279956993839104',
    msg_type: 'text',
    channel_id: '5676024156913475546',
    channel_mode: 'internal',
    channel_type: 'direct',
    text: 'cho a cái data lúc call api /profile',
    status: 1,
    created_at: '2024-07-04T04:35:19.458Z',
    score: '1258279956993839104',
    ref_id: '2024-07-04T04:35:19.400Z',
    is_pin: 0,
    sender: {
      id: '2660362138427143064',
      user_key: 'user_777360',
      user_type: 'user',
      user_id: '777360',
      username: 'anhhv71',
      fullname: 'Hoàng Văn Anh',
      avatar: 'https://cache.giaohangtietkiem.vn/d/390e481d413dd6c06b97f9430e5f6dbe.jpg',
      status_id: 3
    }
  },
  {
    id: '1258279798264606720',
    msg_type: 'text',
    channel_id: '5676024156913475546',
    channel_mode: 'internal',
    channel_type: 'direct',
    text: 'e làm profile chưa',
    status: 1,
    created_at: '2024-07-04T04:34:41.614Z',
    score: '1258279798264606720',
    ref_id: '2024-07-04T04:34:41.563Z',
    is_pin: 0,
    sender: {
      id: '2660362138427143064',
      user_key: 'user_777360',
      user_type: 'user',
      user_id: '777360',
      username: 'anhhv71',
      fullname: 'Hoàng Văn Anh',
      avatar: 'https://cache.giaohangtietkiem.vn/d/390e481d413dd6c06b97f9430e5f6dbe.jpg',
      status_id: 3
    }
  }
]

const showInfo = ref(false)
const message = reactive({
  messageContent: ''
})

const addMessage = () => {
  console.log(message)
  message.messageContent = ''
}

const handleShowInfo = () => {
  showInfo.value = !showInfo.value
}

function scrollToBotom() {
  let scroll = document.getElementById('content')
  scroll.scrollTop = scroll.scrollHeight
}

onMounted(() => {
  scrollToBotom()
})
</script>

<template>
  <div class="flex h-screen">
    <div class="flex flex-col justify-between flex-1 h-full">
      <header class="flex items-center justify-between h-20 px-5 py-3 border-b">
        <div class="flex items-center gap-5">
          <div class="w-14 h-14">
            <img
              src="https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              class="object-cover w-full h-full rounded-full"
            />
          </div>
          <h2 class="text-xl font-medium">UI Gradient | Learn UI/UX Design</h2>
        </div>
        <span @click="handleShowInfo" class="cursor-pointer"><InfoIcon /></span>
      </header>
      <div class="flex-1 p-5 overflow-y-auto content" id="content">
        <CardChat v-for="msg in messageList.reverse()" :key="msg.id" :message="msg" />
      </div>
      <div class="h-12 px-5 mb-5">
        <div class="relative px-4 py-2 border rounded-3xl">
          <input
            type="text"
            placeholder="Message ...."
            class="w-full outline-none"
            v-model="message.messageContent"
            @keyup.enter="addMessage"
          />

          <button
            class="absolute text-blue-400 -translate-y-1/2 cursor-pointer right-5 top-1/2"
            :class="message.messageContent.length >= 1 ? 'block' : 'hidden'"
            @click="addMessage"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    <div class="w-[320px] border-l flex flex-col transition-all" v-if="showInfo">
      <div class="flex items-center h-20 px-3 border-b">
        <h2 class="text-xl font-medium">Details</h2>
      </div>
      <div class="flex flex-col flex-1 gap-5 px-3 py-4 border-b content">
        <h2 class="text-xl font-medium">Members</h2>
        <div class="flex-1 overflow-y-auto">content</div>
      </div>
      <div class="flex flex-col justify-start gap-3 px-3 py-4 text-red-400 h-28">
        <div class="cursor-pointer">Report</div>
        <div class="cursor-pointer">Block</div>
        <div class="cursor-pointer">Delete Chat</div>
      </div>
    </div>
  </div>
</template>
