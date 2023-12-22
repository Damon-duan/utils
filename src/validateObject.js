// 验证对象属性非空
export function validateObject(form) {
  for (const key in form) {
    if (Object.prototype.hasOwnProperty.call(form, key)) {
      const value = form[key]

      if (
        value === null ||
        value === undefined ||
        value === '' ||
        (Array.isArray(value) && !value.length)
      ) {
        return true
      } else if (typeof value === 'object') {
        if (validateObject(value)) {
          return true
        }
      }
    }
  }

  return false
}