// 判断是否是字符串
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }

  return false
}