<template>
  <n-drawer v-model:show="active" placement="top" :on-after-leave="afterLeaveHandle">
    <n-drawer-content>
        <n-input-group  class="flex justify-center m-y-auto">
          <n-input v-model:value.trim="keyword" size="large" :style="{ width: '50%' }" placeholder="请输入关键词" @keyup.enter="handleSearch"/>
          <n-button size="large" :disabled="!keyword" type="primary" ghost @click="handleSearch"> 搜索 </n-button>
        </n-input-group>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
const active = ref(false)
const open = () => {
  active.value = true
}
const close = () => {
  active.value = false
}
const afterLeaveHandle = () => {
  keyword.value = ''
}
const keyword = ref('')

const handleSearch = ()=>{
    if(!keyword.value)return;
    close()
    navigateTo({
        path:`/search`,
        query:{
            keyword:encodeURIComponent(keyword.value),
            type:'course'
        }
    })
}
defineExpose({
  open,
})
</script>

<style scoped lang="scss">
:deep(.n-drawer-body-content-wrapper) {
  display: flex;
}
</style>
