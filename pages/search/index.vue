<template>
  <div class="search-comp">
    <h3 class="text-lg my-3">"{{ title }}"的搜索相关结果</h3>
    <SubBanner :list="list" :query="route.query"></SubBanner>
    <n-grid class="mb-5" x-gap="12" :cols="4">
      <n-gi
        class="cursor-pointer"
        v-for="(item, index) in computedList"
        :key="index"
        @click="openNewWindow(item)"
      >
        <ListItem :item="item"></ListItem>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
//如果是路由返回的
const title = computed(()=>decodeURIComponent(route.query.keyword))

definePageMeta({
  middleware: ["search"],
})
useHead({ title:title.value })
const list = ref([
  { label: "课程", value: "/search", type: "course" },
  { label: "专栏", value: "/search", type: "column" },
])
console.log("aaaa")
const searchParam = computed(()=>{
  return {
    page: route.query.page || 1,
    keyword: route.query.keyword,
    type: route.query.type,
  }
})
const { data } = await getSearchList({
  query: searchParam,
  watch: [searchParam],
})
const computedList = computed(() => {
  return data.value?.data?.rows || []
})
console.log(data)
</script>

<style scoped></style>
