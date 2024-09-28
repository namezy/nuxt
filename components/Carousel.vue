<template>
  <n-carousel show-arrow autoplay class="my-5 h-[400px]">
    <img
      v-for="item in data"
      :key="item.src"
      class="carousel-img object-cover rounded cursor-pointer w-full h-full"
      :src="item.src"
      @click="openNewWindow(item)"
    />
  </n-carousel>
</template>

<script setup lang="ts">
// import { NCarousel } from 'naive-ui';
defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})

</script>

<style scoped></style>
