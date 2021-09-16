import { EventEmitter } from 'events';

const PREFIX = 'app_';

export function getAppEventType(type: string) {
  return `${PREFIX}${type}`;
}

/**
 *
 * app全局事件触发
 * @class AppEventEmitterUtils
 */
class AppEventEmitterUtils {
  private emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmitter();
  }

  off = (type, cb) => this.emitter.off(getAppEventType(type), cb);

  emit = (type, data?) => this.emitter.emit(getAppEventType(type), data);

  on = (type, cb) => this.emitter.on(getAppEventType(type), cb);

  destroy() {
    if (this.emitter) {
      // 移除全部监听
      this.emitter.removeAllListeners();
    }
  }
}
const appEventEmitter = new AppEventEmitterUtils();
export default appEventEmitter;

export enum AppEventType {
  InvalidToken = 'invalid-token',
}
