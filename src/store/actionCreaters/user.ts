/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import { UPDATE_USER_ID, UPDATE_SSO_TOKEN } from '@/store/actions/user';
import actionCreator from './actionCreator';

export default class BaseUserInfo {
  @actionCreator(UPDATE_USER_ID)
  updateUserJJUid(_data: number) {}

  @actionCreator(UPDATE_SSO_TOKEN)
  updateUserToken(_data: string) {}
}
