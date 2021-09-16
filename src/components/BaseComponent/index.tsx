import * as React from 'react';
import produce from 'immer';

/**
 *
 *
 * @class BaseComponent
 * @extends {React.Component<P, S>}
 * @template P
 * @template S
 */

/**
 * UI基础组件
 */
export default class BaseComponent<P = {}, S = {}> extends React.PureComponent<P, S> {
  constructor(props) {
    super(props);
    console.log('BaseComponent');
  }

  /**
   * 重写setState方法
   * @param obj
   * @param callBack
   */
  setState<K extends keyof S>(
    obj:
      | ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null)
      | (Pick<S, K> | S | null),
    callBack?: () => void,
  ): void {
    let fun;
    if (obj.constructor === Object) {
      fun = draft => {
        const keys = Object.keys(obj);
        // eslint-disable-next-line
        keys.map(item => {
          // eslint-disable-next-line
          draft[item] = obj[item];
        });
      };
    } else if (obj.constructor === Function) {
      fun = obj;
    }

    super.setState(produce(fun), () => {
      if (callBack) {
        callBack();
      }
    });
  }

  componentDidCatch(error, info) {
    console.log('错误信息==', this.constructor.name, '=组件出错:', error, info);
    // 你同样可以将错误日志上报给服务器
    return false;
  }

  render() {
    return <div />;
  }
}
