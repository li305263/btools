const class2Type: any = {};

['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'].forEach(e => {
  class2Type[`[object ${e}]`] = e.toLowerCase();
});

/**
 * @description: 判断类型
 */

export default function toType(obj: any): string {
  return obj == null ? String(obj) : class2Type[Object.prototype.toString.call(obj)];
}
