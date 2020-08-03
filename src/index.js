const class2Type = {},
  typeArr = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'];

typeArr.forEach(e => {
  class2Type[`[object ${e}]`] = e.toLowerCase();
});

/**
 * @description: 判断类型
 * @Date: 2020-08-03 23:14:23
 * @param any
 * @return string
 */
export const isType = obj => {
  return obj == null ? String(obj) : class2Type[Object.prototype.toString.call(obj)];
};
