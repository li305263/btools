/**
 * @description: 校验是否为手机号
 * @param {string} 手机号
 * @return {boolean} 返回布尔值
 */
export default function isPhone(phone: string): boolean {
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(phone);
}
