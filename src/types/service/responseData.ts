/*
 * @Author: quanyj 
 * @Date: 2021-08-09 11:20:20 
 * @Last Modified by:   quanyj 
 * @Last Modified time: 2021-08-09 11:20:20
 * 服务返回数据模型
 */

export interface ResponseData<T> {
    errCode: number;
    errMsg?: string;
    data: T;
}

export type RSBoolean = ResponseData<boolean>;

export type RSString = ResponseData<string>;