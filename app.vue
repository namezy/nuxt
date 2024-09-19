<template>
  <n-config-provider inline-theme-disabled>
    <div>
      <h2>hello</h2>
      <button class="text-purple-500">按钮</button>
      <br>
      <nuxt-link to="/">首页</nuxt-link>
      <br>
      <nuxt-link to="/home">home</nuxt-link>
      <br>
      <nuxt-link to="/profile">profile</nuxt-link>
      <!-- <NuxtRouteAnnouncer /> -->
      <NuxtPage></NuxtPage>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts"></script>
