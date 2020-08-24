/**
 * @description: 根据name读取cookie
 * @param {string}
 */
export default function getCookie(name: string) {
  var arr = document.cookie.replace(/\s/g, '').split(';');
  for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split('=');
    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}
