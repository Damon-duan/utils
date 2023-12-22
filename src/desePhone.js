// 手机号码脱敏
export function desePhone(phone) {
  if (!phone) {
    return '';
  }

  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}
