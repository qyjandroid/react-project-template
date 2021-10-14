/**
 *按钮点击间隔检测
 *
 * @export
 * @class Check
 */
class ButtonCheck {
  private timeDelay: number;

  private time: number;

  constructor(timeDelay = 300) {
    this.timeDelay = timeDelay;
    this.time = null;
  }

  setTimeDelay(timeDelay = 300) {
    this.timeDelay = timeDelay;
  }

  check() {
    const curTime = new Date().valueOf();
    if (this.time) {
      // 如果按钮检测
      if (curTime - this.time <= this.timeDelay) {
        return false;
      }
    }
    this.time = curTime;
    return true;
  }
}

export default ButtonCheck;
