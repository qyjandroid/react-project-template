import { IActionParam, IRequestStatus } from '@/types/IRedux';
import produce from 'immer';

import { UPDATE_SSO_TOKEN, UPDATE_USER_ID, UPDATE_USER_NAME_HEAD_ID } from '../actions/user';

export interface UserState {
  status: IRequestStatus;
  token: string;
  SSOToken: string;
  userId: number;
  nickName: string;
  headId: number;
}

const initialState: UserState = {
  token: null,
  SSOToken: null,
  status: IRequestStatus.none,
  nickName: '',
  userId: 0,
  headId: 0,
};

/* eslint-disable no-param-reassign  */
const reducer = produce((draft: UserState, action: IActionParam) => {
  switch (action.type) {
    case UPDATE_USER_ID:
      console.log('当前的用户信息==UPDATE_USER_ID=', action.payload);
      draft.userId = action.payload;
      return draft;
    case UPDATE_SSO_TOKEN:
      console.log('当前的用户信息==UPDATE_SSO_TOKEN=', action.payload);
      // draft.SSOToken = action.payload;
      draft.token = action.payload;
      return draft;
    case UPDATE_USER_NAME_HEAD_ID:
      draft.nickName = action.payload.name;
      draft.headId = action.payload.headId;
      return draft;
    default:
      return draft;
  }
}, initialState);

export default reducer;
