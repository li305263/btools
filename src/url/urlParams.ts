interface Param {
  [key: string]: string;
}
/**
 * url参数转json
 * @param {string} param
 * ?name=li&age=128
 * @return {object}  {name:"；li",age:28}
 */
export default function urlParams(param: string = location.search): object {
  if (typeof param == 'string' && param.indexOf('?') > -1) {
    let str: any = decodeURIComponent(param.slice(1));
    const obj: Param = {};
    str = str.split('&');
    for (let i in str) {
      const kv: Param = str[i].split('=');
      obj[kv[0]] = kv[1];
    }
    return obj;
  }
  return {};
}
