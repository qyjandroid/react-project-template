import { AnyAction } from 'redux';

export interface IActionParam extends AnyAction {
  type: string;
  payload: any;
}

export enum IRequestStatus {
  none = 'none',
  done = 'done',
  error = 'error',
  requesting = 'requesting',
}

export default {
  IRequestStatus,
};
