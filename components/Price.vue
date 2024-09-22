<template>
    <div :class="through?'line-through text-gray-500 text-xs':'text-rose-500 font-bold'">
        {{ value==0?'免费':`¥${value}` }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    value: {
        type: [Number, String],
        default: 0,
    },
    through: {
        type: Boolean,
        default: false,
    },
})
</script>

<style scoped>

</style>