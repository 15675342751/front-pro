// 统一请求路径前缀在libs/axios.js中修改
import { getRequest, postRequest, putRequest } from "@/libs/axios";


export const getTableList = (ex, params) => {
    return getRequest(`/exs/v1/getCloseCoin?ex=${ex}&key=key`, params);
};
