<template>
    <div class="flex items-center ml-auto">
        倒计时：
        <span class="bg-white text-yellow-500 text-xs min-w-5 flex justify-center items-center">{{ dateObj.days }}</span>天
        <span class="bg-white text-yellow-500 text-xs min-w-5 flex justify-center items-center">{{ dateObj.hours }}</span>：
        <span class="bg-white text-yellow-500 text-xs min-w-5 flex justify-center items-center">{{ dateObj.minutes }}</span>：
        <span class="bg-white text-yellow-500 text-xs min-w-5 flex justify-center items-center">{{ dateObj.seconds }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    time:{
        type:[String,Number],
        default:''
    }
})
const timer = ref(null)
const dateObj = ref({})
const formatTimestamp = (time)=>{
   
    if(timer.value){
        clearInterval(timer.value)
        timer.value = null
    }
    timer.value = setInterval(()=>{
        const res = relativeTime(time)
        if(res){
           return dateObj.value = res
        }
        clearInterval(timer.value)
        timer.value = null
    },1000)
}
onMounted(()=>{
    formatTimestamp(props.time)
})
onBeforeUnmount(()=>{
    if(timer.value){
        clearInterval(timer.value)
        timer.value = null
    }
})
</script>

<style scoped>

</style>