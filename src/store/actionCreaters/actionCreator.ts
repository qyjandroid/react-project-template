import { IActionParam } from '@/types/IRedux';
import { Dispatch } from 'redux';
import { getStore } from '..';

let innerDispatch: Dispatch<IActionParam>;

function getDispatch() {
  if (!innerDispatch) {
    innerDispatch = getStore().dispatch;
  }
  return innerDispatch;
}

export default function actionCreator(actionType?: string) {
  return function fn(_target: any, name: string, descriptor: PropertyDescriptor): void {
    // console.log("messageMethod", target);
    console.log('actionCreator', actionType, name, descriptor);

    const type = actionType || name;
    // eslint-disable-next-line no-param-reassign
    descriptor.value = (payload: any) => {
      getDispatch()({
        type,
        payload,
      });
    };
  };
}
