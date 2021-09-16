import { AxiosError, AxiosResponse } from 'axios';

/**
 * 针对请求成功：返回的 code 码做不同的响应处理
 */
class ServerResponseSuccessManager {
  /**
   * 状态码解析器
   * @param response
   */
  codeParser(response: AxiosResponse) {
    const code = response?.data?.errCode;
    const resData = response?.data?.data;
    const parser = {
      '10010': () => {
        this.handleCodeIs10010(resData);
      },
      default: () => console.log('code 无法识别'),
    };
    return parser[code] ? parser[code]() : parser.default;
  }

  /**
   * 状态码为 10010 的响应处理
   * @param resData
   */
  handleCodeIs10010(resData) {
    if (resData === 'TOKEN_INVALID') {
      //appEventEmitter.emit("live-token-invalid");
      // setTimeout(() => {
      //     window.location.href = '/login';
      // }, 1000);
    }
  }
}

/**
 * 针对请求失败的响应处理
 */
class ServerResponseFailedManager {
  /**
   * 请求失败时，需要提示的信息
   */
  getErrorMessage(error: AxiosError) {
    console.error('error.response==', error.response);
  }
}

export const serverResponseSuccessManager = new ServerResponseSuccessManager();
export const serverResponseFailedManager = new ServerResponseFailedManager();
