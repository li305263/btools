interface City {
  [key: string]: number;
}
/**
 * @description: 身份证号合法性验证,支持15位和18位身份证号
 * @param {string} 身份证
 * @return {boolean} 返回布尔值
 */
export default function isIdCard(code: string): boolean {
  const city: City = {
    11: 1,
    12: 1,
    13: 1,
    14: 1,
    15: 1,
    21: 1,
    22: 1,
    23: 1,
    31: 1,
    32: 1,
    33: 1,
    34: 1,
    35: 1,
    36: 1,
    37: 1,
    41: 1,
    42: 1,
    43: 1,
    44: 1,
    45: 1,
    46: 1,
    50: 1,
    51: 1,
    52: 1,
    53: 1,
    54: 1,
    61: 1,
    62: 1,
    63: 1,
    64: 1,
    65: 1,
    71: 1,
    81: 1,
    82: 1,
    91: 1,
  };
  let pass: boolean = true;

  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}[0-9xX]$/.test(code)) {
    // "身份证号格式错误"
    pass = false;
  } else if (!city[code.substr(0, 2)]) {
    // "地址编码错误";
    pass = false;
  } else {
    //18位身份证需要验证最后一位校验位
    if (code.length == 18) {
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
  }
  return pass;
}
