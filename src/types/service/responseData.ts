/*
 * @Author: quanyj
 * @Date: 2021-08-09 11:20:20
 * @Last Modified by: quanyj
 * @Last Modified time: 2021-09-16 16:33:00
 * 服务返回数据模型
 */

export interface IResponseData<T> {
  errCode: number;
  errMsg?: string;
  data: T;
}

export type RSBoolean = IResponseData<boolean>;

export type RSString = IResponseData<string>;
