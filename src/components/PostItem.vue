<script setup></script>

<template>
  <div class="bg-[#FFFFFF] -mx-6 md:mx-0 md:min-h-[426px] rounded-md px-6 py-6 border border-black">
    <div class="flex items-center gap-2">
      <img
        alt="avatar"
        src="https://images.pexels.com/photos/11887201/pexels-photo-11887201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        class="object-cover w-12 h-12 rounded-full"
      />
      <div class="">
        <div class="flex gap-2 items-center text-[14px]">
          <h3 class="text-xl">User 1</h3>
          <span class="dark:text-linkDark">·</span>
          <span class="dark:text-textSecondaryDark">8h</span>
        </div>
      </div>
    </div>

    <p class="mt-4">Coffin Dance</p>

    <div class="flex flex-wrap gap-2 text-blue-500">
      <p>@ctnnguyenphuongnam</p>
      <p>@nphn</p>
      <p>@khoi</p>
      <p>@khoi</p>
      <p>@khoi</p>
      <p>@khoi</p>
      <p>@khoi</p>
      <p>@khoi</p>
      <p>@khoi</p>
      <p>@khoi</p>
    </div>

    <div class="flex mt-4 text-[14px]">
      <div class="flex items-center justify-between flex-1 gap-4">
        <div class="flex items-center gap-2">
          <span>icon like </span>
          <span>200</span>
        </div>
        <div class="flex items-center gap-2">
          <span>10 bình luận</span>
          <span>1 lượt chia sẻ</span>
        </div>
      </div>
    </div>

    <ul
      class="mt-2 border flex justify-between items-center text-[14px] border-[#D9D9D9] h-[46px] border-r-0 border-l-0 w-full"
    >
      <li>
        <button class="flex items-center gap-2 justify-center h-[32px] py-2 px-4 w-full">
          <!-- <HeartIcon /> -->
          <p>Thích</p>
        </button>
      </li>

      <li>
        <button class="flex items-center gap-2 justify-center h-[32px] w-full">
          <!-- <CommentIcon /> -->
          <p>Bình luận</p>
        </button>
      </li>

      <li>
        <button class="flex items-center gap-2 justify-center h-[32px] w-full">
          <!-- <CommentIcon /> -->
          <p>Share</p>
        </button>
      </li>
    </ul>

    <div class="hidden gap-2 mt-4 md:flex">
      <img
        alt="avatar"
        src="https://images.pexels.com/photos/11887201/pexels-photo-11887201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        class="object-cover w-12 h-12 rounded-full"
      />
      <div class="flex flex-col">
        <div class="px-2 py-2 bg-[#F3F4F6] dark:bg-secondaryColorDark rounded-md">
          <div>
            <div
              class="flex gap-2 items-center text-black text-[14px] font-semibold dark:text-[#74CF5A]"
            >
              <h3 class="text-[14px]">User 1</h3>
              <span>·</span>
              <span>Category</span>
            </div>
            <p class="text-primaryTextDark">Coffin Dance</p>
          </div>
        </div>
        <div class="flex items-center gap-4 mt-2 dark:text-textSecondaryDark text-[12px]">
          <button>Thích</button>
          <button>Trả lời</button>
          <p>3 ngày trước</p>
          <p>Đã chỉnh sửa</p>
        </div>
      </div>
    </div>

    <div class="flex gap-2 mt-4">
      <img
        alt="avatar"
        src="https://images.pexels.com/photos/11887201/pexels-photo-11887201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        class="object-cover w-12 h-12 rounded-full"
      />

      <input name="comment" placeholder="Viết bình luận..." />
    </div>
  </div>
</template>
