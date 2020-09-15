/**
 * @description: 获取指定范围内的随机整数
 * @param {number} 开始范围
 * @param {number} 结束范围
 * @return {number} 返回指定范围内的随机整数（包含开始 结束）
 */
export default function random(start: number, end?: number): number {
  if (!end) {
    end = start;
    start = 0;
  }
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
