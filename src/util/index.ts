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
