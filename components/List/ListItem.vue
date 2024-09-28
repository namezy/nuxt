<template>
  <n-card
    class="cursor-pointer mb-5"
    footer-class="!p-0"
    :content-class="item.group_id || item.flashsale_id ? '!pb-2' : ''"
  >
    <template #cover>
        <n-image
          class="h-[150px] w-full"
          width="100"
          :src="item?.cover"
          fallback-src="/fail.png"
        />
    </template>
    <p class="mt-4 font-bold truncate">{{ item?.title }}</p>
    <div class="flex items-baseline">
      <Price class="mr-2" :value="item.price" />
      <Price :value="item.t_price" through />
    </div>
    <template #footer v-if="item.group_id || item.flashsale_id">
      <div
        class="bg-yellow-500 text-xs p-3 flex items-center rounded-b text-white"
      >
        <span>{{ item.group_id ? "拼团" : "秒杀" }}</span>
        <CountDown :time="item.end_time" />
      </div>
    </template>
  </n-card>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
})
</script>
