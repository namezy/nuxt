<template>
  <div class="app flex flex-col bg-gray-100 h-screen overflow-y-auto">
    <Navbar />
    <main class="flex-grow main-container container">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
