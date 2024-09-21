<template>
  <nav class="h-15 bg-white shadow-sm">
    <div class="flex items-center main-container h-full">
      <n-button text class="text-lg !font-bold">编程</n-button>
      <Menu />
      <n-button circle class="ml-auto mr-3">
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
  </nav>
</template>

<script setup lang="ts">
import { Search } from "@vicons/ionicons5"
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
