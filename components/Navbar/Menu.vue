<template>
    <div class="nav-menu flex items-center px-4">
        <div class="nav-menu-item cursor-pointer rounded mx-1 px-2 py-1 hover:(bg-blue-50 text-blue-700) active:(bg-blue-100)" :class="item.path===path?'bg-blue-100 text-blue-700':''"  v-for="item in menus" :key="item.path">
            {{ item.name }}
        </div>
      </div>
</template>

<script setup lang="ts">
const {path} = useRoute()
const menus = [
    {
        name:'首页',
        path:'/',
    },
    {
        name:'考试',
        path:'/examination',
    },
    {
        name:'拼团',
        path:'/group',
    },
    {
        name:'秒杀',
        path:'/flashSale',
    },
    {
        name:'直播',
        path:'/live',
    },
    {
        name:'专栏',
        path:'/specialColumn',
    },
    {
        name:'电子书',
        path:'/book',
    },
    {
        name:'社区',
        path:'/community',
    },
    {
        name:'课程',
        path:'/course',
    },
]
</script>

<style scoped>

</style>