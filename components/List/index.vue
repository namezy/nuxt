<template>
  <div class="list-comp mt-5">
    <div class="flex justify-between mb-2">
      <h2>{{ title }}</h2>
      <n-button quaternary>查看更多</n-button>
    </div>
    <n-grid x-gap="12" :cols="4">
      <n-gi
        class="mb-2 border-none shadow-sm"
        v-for="(item, index) in list"
        :key="index"
      >
      <ListItem :item="item"></ListItem>
        <!-- <n-card class="cursor-pointer" footer-class="!p-0" :content-class="item.group_id || item.flashsale_id?'!pb-2':''">
          <template #cover>
            <img :src="item?.cover" class="h-[150px] w-full" />
          </template>
          <p class="mt-4 font-bold truncate">{{ item?.title }}</p>
          <div class="flex items-baseline">
            <Price class="mr-2" :value="item.price" />
            <Price :value="item.t_price" through />
          </div>
          <template #footer v-if="item.group_id || item.flashsale_id">
            <div class="bg-yellow-500 text-xs p-3 flex items-center rounded-b text-white">
              <span>{{ item.group_id?'拼团':'秒杀' }}</span>
              <CountDown :time="item.end_time" />
            </div>
          </template>
        </n-card> -->
      </n-gi>
    </n-grid>
  </div> 
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
  list: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped></style>
