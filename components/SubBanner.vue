<template>
  <div class="sub-banner-comp mb-4">
    <ul class="flex items-center bg-white">
        <li class="px-4 py-3 border-b-[2px] cursor-pointer border-b-transparent" :class="{'!border-b-blue-600 !text-blue-600':query.type===item.type}" v-for="(item,index) in list" @click="go(item.value,item.type)" :key="index">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  query:{
    type:Object,
    //这里给空对象就报错
    // default:()=>({})
  }
})
const go = (value:string,type:string) => {
    navigateTo({
        path: value,
        query:{...props.query,type:type},
        replace: true
    })
    console.log('11')
}
</script>

<style scoped></style>
