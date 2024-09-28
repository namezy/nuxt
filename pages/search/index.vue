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
    <NPagination :page="page" :page-size="10" :item-count="total" :on-update:page="handlePage"></NPagination>
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
const page = ref(1)
const searchParam = computed(()=>{
  return {
    keyword: route.query.keyword,
    type: route.query.type,
  }
})
//{
//   query: {...searchParam.value,page:page.value},
//   watch: [searchParam,page],
// }
// const { data } = await getApi('/pc/search', {
//   queryObj: {...searchParam.value,page:page.value},
//   watch: [searchParam,page],
// })
// const { data } = await useFetch(()=>`http://demonuxtapi.dishait.cn/pc/search?page=${page.value}&keyword=${searchParam.value.keyword}&type=${searchParam.value.type}`,{
//   // query: {...searchParam.value,page:page.value},
//   headers: {
//     'appId': 'bd9d01ecc75dbbaaefce',
//   },
//   watch: [page],
// })

const { data } =  useFetch(()=>`http://demonuxtapi.dishait.cn/pc/search`,{
  params: {...searchParam.value,page:page.value},
  headers: {
    'appId': 'bd9d01ecc75dbbaaefce',
  },
  watch: [searchParam,page],
})
const computedList = computed(() => {
  return data.value?.data?.rows || []
})
const total = computed(() => {
  return data.value?.data?.count || 0
})
const handlePage = (val:number)=>{
  console.log(val)
  page.value = val
}

console.log(data)
</script>

<style scoped></style>
