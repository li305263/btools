/**
 * @description: 校验是否为邮箱
 * @param {string} 邮箱字符串
 * @return {boolean} 返回布尔值
 */
export default function isEmail(email: string): boolean {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g.test(email);
}
