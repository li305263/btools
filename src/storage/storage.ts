import toType from './../code/toType';
/**
 * @description: 字符串转换成默认类型
 * @param {string}
 * @return {any}
 */

export function stringParse(val: any): any {
  try {
    return JSON.parse(val);
  } catch (e) {
    if (/^undefined$/.test(val)) return;
    return val;
  }
}
/**
 * @description: localStorage获取值
 * @param {string}
 * @return {any}
 */
export function getLs(key: string): any {
  return stringParse(localStorage.getItem(key));
}
/**
 * @description: localStorage设置值
 * @param {string}
 * @param {any}
 */
export function setLs(key: string, val: any) {
  if (toType(val) === 'object' || toType(val) === 'array') val = JSON.stringify(val);
  localStorage.setItem(key, val);
}
/**
 * @description: localStorage删除值
 * @param {string}
 */
export function removeLs(key: string) {
  localStorage.removeItem(key);
}
/**
 * @description: localStorage获取值
 * @param {string}
 * @return {any}
 */
export function getSs(key: string): any {
  return stringParse(sessionStorage.getItem(key));
}
/**
 * @description: sessionStorage设置值
 * @param {string}
 * @param {any}
 */
export function setSs(key: string, val: any) {
  if (toType(val) === 'object' || toType(val) === 'array') val = JSON.stringify(val);
  sessionStorage.setItem(key, val);
}
/**
 * @description: sessionStorage删除值
 * @param {string}
 */
export function removeSs(key: string) {
  sessionStorage.removeItem(key);
}
