<template>
  <nav class="h-15 bg-white shadow-sm flex-shrink-0 sticky top-0 z-1">
    <div class="flex items-center main-container h-full">
      <n-button text class="text-lg !font-bold">编程</n-button>
      <Menu />
      <n-button circle class="ml-auto mr-3" @click="searchInstance?.open()">
        <template #icon>
          <n-icon class="ml-auto">
            <Search />
          </n-icon>
        </template>
      </n-button>
      <n-dropdown trigger="hover" :options="options" :show-arrow="true">
        <n-avatar
          round
          size="small"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </n-dropdown>
    </div>
    <search-bar ref="searchInstance"></search-bar>
  </nav>
</template>

<script setup lang="ts">
import { Search } from "@vicons/ionicons5"
// import { NDropdown,NButton,NIcon,NAvatar } from 'naive-ui';
const searchInstance = ref(null)
const options = [
  {
    label: "用户中心",
    key: "profile",
  },
  {
    label: "退出",
    key: "logout",
  },
]
</script>
