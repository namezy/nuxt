<template>
  <n-grid class="mb-5" x-gap="12" :cols="4">
    <n-gi
      class="cursor-pointer"
      v-for="(item, index) in data"
      :key="index"
      @click="openNewWindow(item)"
    >
      <n-card>
        <template #cover>
          <img :src="item?.src" class="h-[90px]" />
        </template>
        <p class="text-center mt-4">{{ item?.name }}</p>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped></style>
