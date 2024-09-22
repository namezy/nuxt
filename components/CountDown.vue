<template>
    <div>
        {{ time }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    time:{
        type:[String,Number],
        default:''
    }
})
const time1= relativeTime(props.time)
console.log(time1)
</script>

<style scoped>

</style>