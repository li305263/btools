/**
 * @description: 防抖 如果持续触发事件，停止触发一段时间后，执行一次事件
 * @param {function} 回调
 * @param {number} 毫秒数
 * @param {boolean} 是否立即执行
 * @return {any}
 */
export default function debounce(fn: Function, wait: number, immediate: boolean): any {
  let timeout: any, result: any;
  const _debounce = function (this: void) {
    if (timeout) clearTimeout(timeout);
    const ctx = this,
      args = arguments;

    if (immediate) {
      // 如果已经执行过，不再执行
      let callNow = !timeout;

      timeout = setTimeout(() => {
        timeout = null;
      }, wait);

      if (callNow) result = fn.apply(ctx, args);
    } else {
      timeout = setTimeout(function () {
        fn.apply(ctx, args);
      }, wait);
    }
    return result;
  };

  _debounce.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return _debounce;
}
