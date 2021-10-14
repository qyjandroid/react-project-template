/** 获取当前开发环境 */
export function getEnv() {
  return {
    isDev: process.env.ENV === 'dev', // 本地开发环境
    isProd: process.env.ENV === 'prod', // 生产环境
    isTest: process.env.ENV === 'test', //测试环境
  };
}

export function classNames(...args: any) {
  const classes = [];
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg) {
      const argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push((this && this[arg]) || arg);
      } else if (Array.isArray(arg)) {
        classes.push(classNames(...arg));
      } else if (argType === 'object') {
        const hasOwn = {}.hasOwnProperty;
        Object.keys(arg).forEach(key => {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push((this && this[key]) || key);
          }
        });
      }
    }
  }

  return classes.join(' ');
}

export function isMobile() {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  );
  if (flag) {
    return true;
  }
  return false;
}

export function setTimeout(fn: () => void, time: number) {
  const timer = window.setTimeout(fn, time);
  return () => {
    window.clearTimeout(timer);
  };
}

export function setInterval(fn: () => void, time: number) {
  const timer = window.setInterval(fn, time);
  return () => {
    window.clearInterval(timer);
  };
}
