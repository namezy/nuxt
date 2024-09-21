<template>
  <div class="app flex flex-col bg-gray-100">
    <Navbar />
    <main class="flex-grow main-container">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
