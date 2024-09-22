<template>
  <footer class="footer bg-dark-400 text-gray-100 flex-shrink-0">
    <div class="flex items-center justify-center  py-5">
      <a href="#" v-for="item in 5" class="px-3" :key="item">友情链接</a>
    </div>
    <div
      class="main-container border-t border-gray-700 flex justify-center items-center py-5"
    >
      <p>© 2021 - 2022</p>
      <p>Powered by</p>
    </div>
  </footer>
</template>
