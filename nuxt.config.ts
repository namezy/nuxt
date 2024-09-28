// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: "./",
  build: {
    transpile: ["vueuc"],
  },
  app: {
    head: {
      title: "nuxt-naive-ui",
      htmlAttrs: {
        lang: "zh-cn",
      },
      meta: [
        // <meta charset="utf-8">
        { charset: "utf-8" },
        { name: "description", content: "nuxt-naive-ui" },
        { name: "keywords", content: "nuxt、naive-ui、vite、windicss" },
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        // { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: "https://awesome-lib.js" },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: "stylesheet", href: "https://awesome-lib.css" },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ":root { color: red }", type: "text/css" },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },
  modules: ["nuxtjs-naive-ui", "nuxt-windicss", "@nuxt/eslint"], //@bg-dev/nuxt-naiveui
  css: ["@/assets/styles/global.css"],
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar",
            ],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // or "modern"
        },
      },
    },
  },
  components: [
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    //不在public中的配置，只在服务端生效
    apiSecret: "123456",
    //public 客户端服务端都生效
    //可以拿到命令行中的参数
    //process.env.API_URL || "http://demonuxtapi.dishait.cn"
    public: {
      apiBaseUrl: "http://demonuxtapi.dishait.cn",
    },
  },
  //也可以拿到命令行中的参数
  // appConfig: {
  //   apiUrl: process.env.API_URL || "https://api.example.com",
  //   siteName: "My Nuxt App",
  // },
})
