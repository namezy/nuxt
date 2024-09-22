<template>
  <div>
    <Carousel :data="carousels" />
    <ListBanner :data="listBanner" />
    <ImageBanner :data="imageBanner"/>
    <List title="拼团" :list="groupList"/>
    <List v-for="(item,index) in computedList" :key="index" :title="item.title" :list="item.data" />
  </div>
</template>

<script setup lang="ts">
const { data } = useFetch(
  "http://demonuxtapi.dishait.cn/pc/index",
  {
    headers: {
      appid: "bd9d01ecc75dbbaaefce",
    },
  }
)
//轮播图数据
const carousels = computed(()=>{
  const res =  data.value?.data?.find(item=>item.type==='swiper')
  if(res){
    return res.data
  }
  return []
})
//图片里表
const listBanner = computed(()=>{
  const res =  data.value?.data?.find(item=>item.type==='icons')
  if(res){
    return res.data
  }
  return []
})
const imageBanner = computed(()=>{
  const res =  data.value?.data?.find(item=>item.type==='imageAd')
  if(res){
    return res.data[0]
  }
  return []
})
const computedList = computed(()=>{
  return  data.value?.data?.filter(item=>item.type==='list') || []
 
})

const { data :groupData} = useFetch(
  "http://demonuxtapi.dishait.cn/pc/group/list?page=1&usable=1&limit=10",
  {
    headers: {
      appid: "bd9d01ecc75dbbaaefce",
    },
  }
)
const groupList = computed(()=>{
  return groupData.value?.data?.rows || []
})
console.log(groupData.value)
</script>

<style scoped></style>
