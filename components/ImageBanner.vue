<template>
    <img class="w-full h-25 object-cover cursor-pointer" :src="data.src" alt="" @click="openNewWindow(data)">
</template>



<script setup lang="ts">
defineProps({
    data: {
        type: Object,
        default: () => ({}),
    },
})
</script>