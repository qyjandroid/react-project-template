import { apiService } from '@/services/BaseService';
import { IResponseData } from '@/types/service/responseData';
import { IUserNameAndHeadInfo } from '@/types/service/user';

// 获取用户信息
export const getUserInfo = (id: number) =>
  apiService.post<IResponseData<IUserNameAndHeadInfo>>('action-common/app/getUserInfo', { id });
