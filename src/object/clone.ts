import toType from './../code/toType';
/**
 * @description: 深拷贝,常用类型拷贝
 * @param {any} 克隆目标
 * @return {any} 返回新目标
 */

interface CloneTarget {
  [key: string]: any;
  [index: number]: any;
}
interface RegExpExecArray extends Array<string> {
  index: number;
  input: string;
}
export default function clone(target: any, map = new WeakMap()): any {
  if (typeof target !== 'object' || target === null) return target;

  const targetType = toType(target);

  if (targetType === 'date') {
    return new Date(target);
  } else if (targetType === 'regexp') {
    const reg = /\w*$/;
    let result = new RegExp(target.source, (reg.exec(target) as RegExpExecArray)[0]);
    result.lastIndex = target.lastIndex; // lastIndex 表示每次匹配时的开始位置
    return result;
  }
  // 弱引用增加性能,会被垃圾回收,处理循环引用
  if (map.get(target)) {
    // 已经放入过map的直接返回
    return map.get(target);
  }

  let cloneTarget: CloneTarget = Array.isArray(target) ? [] : {};

  map.set(target, cloneTarget);

  for (let i in target) {
    if (target.hasOwnProperty(i)) cloneTarget[i] = clone(target[i], map);
  }

  return cloneTarget;
}
