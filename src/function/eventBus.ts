/**
 * @description: 发布订阅事件类
 */
interface EventList {
  [key: string]: Function[];
}
export default class eventBus {
  eventList: EventList;
  constructor() {
    this.eventList = {};
  }
  // 绑定事件
  on(type: string, callback: Function) {
    if (!this.eventList[type]) this.eventList[type] = [];
    this.eventList[type].push(callback);
  }
  // 只触发一次事件
  once(type: string, callback: Function) {
    const wrap = (...arg: any) => {
      callback.apply(this, arg);
      this.off(type, wrap);
    };
    this.on(type, wrap);
  }
  // 触发事件
  emit(type: string, ...arg: any) {
    if (this.eventList[type]) {
      this.eventList[type].forEach((fn: Function) => {
        fn(...arg);
      });
    }
  }
  // 移除事件
  off(type: string, callback: Function) {
    if (this.eventList[type]) {
      this.eventList[type] = this.eventList[type].filter((fn: Function) => fn !== callback);
    }
  }
  // 移除所有事件
  offAll(type: string) {
    if (this.eventList[type]) {
      delete this.eventList[type];
    } else {
      this.eventList = {};
    }
  }
}
