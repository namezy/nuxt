export default defineNuxtRouteMiddleware(( to ) => {
  const { keyword, type } = to.query
  if (!keyword) {
    //此方法在服务端执行时会中断导航，并跳转到error页面
    //在客户端执行时会中断导航，但不会跳转到error页面
    return abortNavigation("404")
  }
  if (!["course", "column"].includes(type)) {
    return abortNavigation("404")
  }
})


