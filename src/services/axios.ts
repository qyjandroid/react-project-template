import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';
import {
  serverResponseFailedManager,
  serverResponseSuccessManager,
} from '@/services/ServerResponseManager';

const axiosInstance: AxiosInstance = axios.create({
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

//axiosInstance.defaults.headers.common.platform = "PC";

/**
 * request 拦截器
 */
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // config.url = host + config.url;
    if (!navigator.onLine) {
      //toast("网络连接已断开，请稍后重试");
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

/**
 * response 拦截器
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code === 200) {
      return response;
    }
    // 针对请求成功：返回的 code 码做不同的响应
    serverResponseSuccessManager.codeParser(response);
  },
  (error: AxiosError) => {
    // 针对请求失败：应该提示的错误信息
    serverResponseFailedManager.getErrorMessage(error);
    return Promise.reject(error.response);
  },
);

export function setAuthorization(token) {
  console.log('request:setAuthorization', token);
  axiosInstance.defaults.headers.common.Authorization = token;
}

// TODO:: add 拦截器(拦截之后返回T??)，预设等等,
export function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return axiosInstance.get<T>(url, config).then((res: AxiosResponse) => res.data);
}

export function post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
  return axiosInstance.post<T>(url, data, config).then((res: AxiosResponse) => res.data);
}

export function getBlob(url: string): Promise<Blob> {
  return axios
    .get(url, {
      responseType: 'blob',
    })
    .then(res => res.data);
}

export default axiosInstance;
