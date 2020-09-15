/**
 * @description: Fisher–Yates 数组乱序
 * @param 数组
 * @return 返回乱序后的数组
 */
export default function shuffle(arr: any[]) {
  let i: number, j: number, t: any;
  for (i = arr.length; i; i--) {
    j = Math.floor(Math.random() * i);
    t = arr[i - 1];
    arr[i - 1] = arr[j];
    arr[j] = t;
  }
  return arr;
}
