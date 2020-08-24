interface Options {
  leading?: undefined | false;
  trailing?: undefined | false;
}
/**
 * @description: 节流 如果持续触发事件，每隔一段时间，只执行一次事件
 * @param {function} 回调
 * @param {number} 毫秒数
 * @param {object} leading：false 表示禁用第一次执行
 *                  trailing: false 表示禁用停止触发的回调
 *                  leading,trailing 不能同时为false
 *                  默认为第一次触发马上执行函数，最后一次触发也可以执行一次函数
 * @return {function}
 */
export default function throttle(fn: Function, wait: number, options: Options = {}): Function {
  let timeout: any,
    ctx: void | null,
    args: IArguments | null,
    previous: number = 0;

  const later = function () {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    fn.apply(ctx, args);
    if (!timeout) ctx = args = null;
  };

  const _throttle = function (this: void) {
    const now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    ctx = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      fn.apply(ctx, args);
      if (!timeout) ctx = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  _throttle.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };

  return _throttle;
}
