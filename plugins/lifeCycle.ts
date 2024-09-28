// import { createDiscreteApi, type LoadingBarApi } from "naive-ui"
export default defineNuxtPlugin((nuxtApp) => {
  // console.log("======")
  // const loadingBarRef = ref<LoadingBarApi | null>(null)
  // nuxtApp.hook("app:created", (e) => {
  //   const { loadingBar } = createDiscreteApi(["loadingBar"])
  //   loadingBarRef.value = loadingBar
  //   console.log(loadingBarRef.value)
  //   console.log("App created")
  //   console.log(e)
  // })
  // nuxtApp.hook("app:mounted", (e) => {
  //   console.log("App mounted")
  //   console.log(e)
  // })
  // nuxtApp.hook("page:start", (e) => {
  //   console.log("page:start")
  //   console.log(e)
  // })
  // nuxtApp.hook("page:finish", (e) => {
  //   console.log("page:finish")
  //   console.log(e)
  // })
  // nuxtApp.hook("page:loading:start", () => {
  //   console.log("page:loading:start")
  //   console.log(loadingBarRef.value)
  //   loadingBarRef.value?.start()
  // })
  // nuxtApp.hook("page:loading:end", () => {
  //   console.log(loadingBarRef.value)
  //   console.log("page:loading:end")
  //   loadingBarRef.value?.finish()
  // })
  // // nuxtApp.hook('page:loading:end',()=>{
  // //     console.log('page:loading:end')
  // // })
  nuxtApp.hook("app:error", (e) => {
    console.log("App error")
    console.log(e)
  })
})
