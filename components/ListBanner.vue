<template>
  <n-flex class="mb-5" :wrap="false">
    <n-card class="cursor-pointer" v-for="(item,index) in data" :key="index" @click="openNewWindow(item)">
      <template #cover>
        <img :src="item?.src" class="h-[90px]">
      </template>
      <p class="text-center mt-4">{{ item?.name }}</p>
    </n-card>
  </n-flex>
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
