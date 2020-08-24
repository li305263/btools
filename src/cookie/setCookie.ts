/**
 * @description  设置Cookie
 * @param {string}
 * @param {string}
 * @param {number}
 */
export default function setCookie(name: string, value: string, days: number) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date;
}
