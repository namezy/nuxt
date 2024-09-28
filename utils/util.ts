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
  if (diff <= 0) return ""
  const duration = dayjs.duration(diff)
  return {
    days: duration.days(),
    hours: duration.hours().toString().padStart(2, "0"),
    minutes: duration.minutes().toString().padStart(2, "0"),
    seconds: duration.seconds().toString().padStart(2, "0"),
  }
}

export const isPositiveInteger = (value) => {
  // 检查变量是否为数字类型
  try {
    value = Number(value)
    if (typeof value === "number") {
      // 检查变量是否为整数
      if (Number.isInteger(value)) {
        // 检查变量是否大于零
        return value > 0
      }
    }
  } catch (e) {
    console.log(e)
    return false
  }

  return false
}

export const formatQueryString = (params) => {
  const keys = Object.keys(params)
  if (keys.length === 0) return ""
  const queryString = "?"
  const res = keys
    .map((key) => {
      return `${key}=${params[key]}`
    })
    .join("&")
  return queryString + res
}
