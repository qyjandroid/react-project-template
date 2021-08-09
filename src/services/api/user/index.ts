import { apiService } from "@/services/BaseService";
import { ResponseData } from "@/types/service/responseData";
import { UserNameAndHeadInfo } from './../../../types/service/user';


// 获取用户信息
export const getUserInfo = (id: number) => {
    return apiService.post<ResponseData<UserNameAndHeadInfo>>("action-common/app/getUserInfo", { id });
};