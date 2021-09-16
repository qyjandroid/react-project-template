import { AxiosRequestConfig } from 'axios';
import getConfig from './serviceConfig';
import { get, post } from './axios';

const apiConfig = getConfig();

export default class BaseService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private handelGetUrl = (url: string, params: any): string => {
    let curUrl = url;
    if (params) {
      const paramsArray: string[] = [];
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined) {
          paramsArray.push(`${key}=${params[key]}`);
        }
      });
      if (url.search(/\?/) === -1) {
        curUrl += `?${paramsArray.join('&')}`;
      } else {
        curUrl += `&${paramsArray.join('&')}`;
      }
    }
    return curUrl;
  };

  getFullPath = (path: string) => `${this.baseUrl}/${path}`;

  getByQuery = <T>(path: string, data: any = {}, config?: AxiosRequestConfig): Promise<T> => {
    const curPath = this.handelGetUrl(path, data);
    return this.get<T>(curPath, config);
  };

  get = <T>(path: string, config?: AxiosRequestConfig): Promise<T> =>
    get<T>(this.getFullPath(path), config);

  post = <T>(path: string, data: any = {}, config?: AxiosRequestConfig): Promise<T> =>
    post<T>(this.getFullPath(path), data, config);
}

export const apiService = new BaseService(apiConfig.API_SERVER);
