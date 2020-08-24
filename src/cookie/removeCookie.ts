import setCookie from './setCookie';
/**
 * @description 根据name删除cookie
 * @param {string}
 */
export default function removeCookie(name: string) {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, '1', -1);
}
