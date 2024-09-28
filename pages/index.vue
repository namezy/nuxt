<template>
  <div>
    <carousel :data="carousels" />
    <ListBanner :data="listBanner" />
    <ImageBanner :data="imageBanner" />
    <List title="拼团" :list="groupList" />
    <List
      v-for="(item, index) in computedList"
      :key="index"
      :title="item.title"
      :list="item.data"
    />
   
    <!-- <h1>counter:{{ counter }}</h1>
    <button @click="counter = null">reset</button>
    <br> 
    <button @click="counter--">-----</button>
    <br>
    <button @click="counter++">++++</button> -->
  </div>
</template>

<script setup lang="ts">
// const counter = useCookie('counter')
// throw new Error('test')
// counter.value = counter.value ? Number(counter.value) : Math.round(Math.random() * 100)
const { data } = await getIndexInfo()
//轮播图数据
const carousels = computed(() => {
  const res = data.value?.data?.find((item) => item.type === "swiper")
  if (res) {
    return res.data
  }
  return []
})
//图片里表
const listBanner = computed(() => {
  const res = data.value?.data?.find((item) => item.type === "icons")
  if (res) {
    return res.data
  }
  return []
})
const imageBanner = computed(() => {
  const res = data.value?.data?.find((item) => item.type === "imageAd")
  if (res) {
    return res.data[0]
  }
  return []
})
const computedList = computed(() => {
  return data.value?.data?.filter((item) => item.type === "list") || []
})
const { data: groupData } = await getGroupList({query: {page: 1, usable: 1, limit: 10}})
const groupList = computed(() => {
  return groupData.value?.data?.rows || []
})
</script>

<style scoped></style>
