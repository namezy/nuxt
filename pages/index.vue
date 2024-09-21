<template>
  <div>
    <h2>首页</h2>
  </div>
</template>

<script setup lang="ts">
// const {data,refresh,status} =  useAsyncData('http://demonuxtapi.dishait.cn/pc/index',()=>{
//     return $fetch('http://demonuxtapi.dishait.cn/pc/index',{
//         headers:{
//             appid:"bd9d01ecc75dbbaaefce"
//         }
//     })
// })
const { data, refresh, status } = useFetch(
  "http://demonuxtapi.dishait.cn/pc/index",
  {
    headers: {
      appid: "bd9d01ecc75dbbaaefce",
    },
  }
)
console.log(status)
</script>

<style scoped></style>
