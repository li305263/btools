/**
 * @description  设置Cookie
 */
export default function setCookie(name: string, value: string, days: number) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date;
}
