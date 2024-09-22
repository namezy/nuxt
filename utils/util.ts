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
  // 计算距现在的时间差
  const now = dayjs()
  const diff = targetDate.diff(now)
  if(diff<=0) return ''
  const duration = dayjs.duration(diff)
  return{
    days:duration.days(),
    hours:duration.hours().toString().padStart(2,'0'),
    minutes:duration.minutes().toString().padStart(2,'0'),
    seconds:duration.seconds().toString().padStart(2,'0'),
  }
}

