interface CloneTarget {
  [key: string]: any;
  [index: number]: any;
}

/**
 * @description: 深拷贝,常用类型拷贝
 * @param {any} 克隆目标
 * @return {any} 返回新目标
 */
export default function clone(target: any): any {
  if (typeof target !== 'object' || target === null) return target;

  let cloneTarget: CloneTarget = Array.isArray(target) ? [] : {};

  for (let i in target) {
    if (target.hasOwnProperty(i)) cloneTarget[i] = clone(target[i]);
  }

  return cloneTarget;
}
