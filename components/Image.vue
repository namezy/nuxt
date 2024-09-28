<template>
    <img :src="src"  alt="">
</template>

<script setup lang="ts">
defineProps({
    src: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>

</style>