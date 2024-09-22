import dayjs from "dayjs"
export const openNewWindow = (item) => {
  if (item.type === "webview" && item.url) {
    navigateTo(item.url, {
      open: {
        target: "_blank",
      },
    })
  }
}

export const relativeTime = (time: string | number) => {
  if (!time) return ""
  const targetDate = dayjs(time)
    console.log(targetDate)
  // 计算距现在的时间差
  const now = dayjs()
  const diff = targetDate.diff(now)
  return{
    days:targetDate.diff(now,'day'),
    hours:targetDate.diff(now,'hour'),
    minutes:targetDate.diff(now,'minute'),
    day:targetDate.diff(now,'day'),
  }
}
