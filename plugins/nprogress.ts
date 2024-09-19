import NProgress from "nprogress"
import "nprogress/nprogress.css"
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:loading:start", () => {
    if (import.meta.server) {
      console.log("server")
    }
    if (import.meta.client) {
      console.log("client")
      NProgress.start()
    }
  })

  nuxtApp.hook("page:loading:end", () => {
    if (import.meta.client) {
      NProgress.done()
    }
  })

  nuxtApp.hook("app:error", () => {
    if (import.meta.client) {
      NProgress.done()
    }
  })
})
