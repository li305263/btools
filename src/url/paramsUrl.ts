interface Param {
  [key: string]: any;
}
/**
 * json转url参数
 * @param {object} param
 * {name:"；li",age:28}
 * @return {string}  name=li&age=128
 */
export default function paramsUrl(param: Param): string {
  if (typeof param == 'object') {
    let str = '';
    for (let key in param) {
      if (typeof param[key] == 'object') {
        str += paramsUrl(param[key]);
      } else {
        if (param[key]) str += key + '=' + param[key] + '&';
      }
    }
    return str.slice(0, -1);
  }

  return param;
}
