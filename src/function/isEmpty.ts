/**
 * @description: 判断对象，数组，字符串是否为空
 * @param {object} 需要判断的对象，数组，字符串
 * @return {boolean} 返回布尔值
 */
export default function isEmpty(obj: any): boolean {
  for (var i in obj) return false;
  return true;
}
