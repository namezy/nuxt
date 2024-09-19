<template>
  <div class="error-page w-full h-full flex justify-center items-center">
    <n-result
      status="500"
      title="错误信息"
      :description="error.message"
    >
      <template #footer>
        <n-button>回到首页</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: "/" })
</script>

<style scoped lang="scss">
   .error-page :deep(.n-base-icon) {
        height: 80px;
        width: 80px;
        display: block;
    }
</style>
