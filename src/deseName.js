// 姓名脱敏
export function deseName(name) {
  if (!name) {
    return '';
  }

  return `${name[0]}${name.length === 2 ? '*' : '**'}`
}
