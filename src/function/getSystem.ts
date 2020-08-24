/**
 * @description: 获取系统信息
 * @return {object}
 */
export default function getSystem(): object {
  if (typeof navigator === 'undefined') return {};
  const ua: string | any = navigator.userAgent.toLowerCase();
  const testUa = (regexp: RegExp): boolean => regexp.test(ua);
  const testVs = (regexp: RegExp): string =>
    ua
      .match(regexp)
      .toString()
      .replace(/[^0-9|_.]/g, '')
      .replace(/_/g, '.');
  // 系统
  let system = 'unknow';
  if (testUa(/windows|win32|win64|wow32|wow64/g)) {
    system = 'windows'; // windows系统
  } else if (testUa(/macintosh|macintel/g)) {
    system = 'macos'; // macos系统
  } else if (testUa(/x11/g)) {
    system = 'linux'; // linux系统
  } else if (testUa(/android|adr/g)) {
    system = 'android'; // android系统
  } else if (testUa(/ios|iphone|ipad|ipod|iwatch/g)) {
    system = 'ios'; // ios系统
  }

  // 系统版本
  let systemVs = 'unknow';
  if (system === 'windows') {
    if (testUa(/windows nt 5.0|windows 2000/g)) {
      systemVs = '2000';
    } else if (testUa(/windows nt 5.1|windows xp/g)) {
      systemVs = 'xp';
    } else if (testUa(/windows nt 5.2|windows 2003/g)) {
      systemVs = '2003';
    } else if (testUa(/windows nt 6.0|windows vista/g)) {
      systemVs = 'vista';
    } else if (testUa(/windows nt 6.1|windows 7/g)) {
      systemVs = '7';
    } else if (testUa(/windows nt 6.2|windows 8/g)) {
      systemVs = '8';
    } else if (testUa(/windows nt 6.3|windows 8.1/g)) {
      systemVs = '8.1';
    } else if (testUa(/windows nt 10.0|windows 10/g)) {
      systemVs = '10';
    }
  } else if (system === 'macos') {
    systemVs = testVs(/os x [\d._]+/g);
  } else if (system === 'android') {
    systemVs = testVs(/android [\d._]+/g);
  } else if (system === 'ios') {
    systemVs = testVs(/os [\d._]+/g);
  }
  // 平台
  let platform = 'unknow';
  if (system === 'windows' || system === 'macos' || system === 'linux') {
    platform = 'desktop'; // 桌面端
  } else if (system === 'android' || system === 'ios' || testUa(/mobile/g)) {
    platform = 'mobile'; // 移动端
  }
  // 内核 + 载体
  let engine = 'unknow';
  let browser = 'unknow';
  if (testUa(/applewebkit/g)) {
    engine = 'webkit'; // webkit内核
    if (testUa(/edge/g)) {
      browser = 'edge'; // edge浏览器
    } else if (testUa(/opr/g)) {
      browser = 'opera'; // opera浏览器
    } else if (testUa(/chrome/g)) {
      browser = 'chrome'; // chrome浏览器
    } else if (testUa(/safari/g)) {
      browser = 'safari'; // safari浏览器
    }
  } else if (testUa(/gecko/g) && testUa(/firefox/g)) {
    engine = 'gecko'; // gecko内核
    browser = 'firefox'; // firefox浏览器
  } else if (testUa(/presto/g)) {
    engine = 'presto'; // presto内核
    browser = 'opera'; // opera浏览器
  } else if (testUa(/trident|compatible|msie/g)) {
    engine = 'trident'; // trident内核
    browser = 'iexplore'; // iexplore浏览器
  }
  // 内核版本
  let engineVs = 'unknow';
  if (engine === 'webkit') {
    engineVs = testVs(/applewebkit\/[\d._]+/g);
  } else if (engine === 'gecko') {
    engineVs = testVs(/gecko\/[\d._]+/g);
  } else if (engine === 'presto') {
    engineVs = testVs(/presto\/[\d._]+/g);
  } else if (engine === 'trident') {
    engineVs = testVs(/trident\/[\d._]+/g);
  }

  // 载体版本
  let browserVs = 'unknow';
  if (browser === 'chrome') {
    browserVs = testVs(/chrome\/[\d._]+/g);
  } else if (browser === 'safari') {
    browserVs = testVs(/version\/[\d._]+/g);
  } else if (browser === 'firefox') {
    browserVs = testVs(/firefox\/[\d._]+/g);
  } else if (browser === 'opera') {
    browserVs = testVs(/opr\/[\d._]+/g);
  } else if (browser === 'iexplore') {
    browserVs = testVs(/(msie [\d._]+)|(rv:[\d._]+)/g);
  } else if (browser === 'edge') {
    browserVs = testVs(/edge\/[\d._]+/g);
  }

  // 获取到system、systemVs、platform、engine、engineVs、browser、browserVs
  return {
    engine, // webkit gecko presto trident
    engineVs,
    platform, // desktop mobile
    browser, // chrome safari firefox opera iexplore edge
    browserVs,
    system, // windows macos linux android ios
    systemVs,
  };
}
