// 距离格式化
export function formatDistance (distance, unit) {
  if (unit === 'km') {
    // 将米转换为千米
    return (distance / 1000).toFixed(2) + ' km'
  } else if (unit === 'mi') {
    // 将米转换为英里
    return (distance * 0.000621371).toFixed(2) + ' miles'
  }

  // 默认返回米
  return distance + ' m'
}