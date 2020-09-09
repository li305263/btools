/**
 * @description: 身份证号合法性验证,支持15位和18位身份证号
 * @param {string} 身份证
 * @return {boolean} 返回布尔值
 */
export default function isIdCard(code: string): boolean {
  let pass: boolean = true;

  if (!code || !/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(code)) {
    // "身份证号格式错误"
    pass = false;
  } else if (!/^11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65|71|81|82|91$/.test(code.substr(0, 2))) {
    // "地址编码错误";
    pass = false;
  } else if (code.length === 18) {
    //18位身份证需要验证最后一位校验位
    const codeArr: string[] = code.split('');
    //∑(ai×Wi)(mod 11)
    //加权因子
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    //校验位
    const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    let ai: any = 0;
    let wi = 0;
    for (var i = 0; i < 17; i++) {
      ai = codeArr[i];
      wi = factor[i];
      sum += ai * wi;
    }
    if (parity[sum % 11] != codeArr[17].toUpperCase()) {
      // "校验位错误";
      pass = false;
    }
  }
  return pass;
}
