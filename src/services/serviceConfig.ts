/*
 * @Author: quanyj
 * @Date: 2021-08-09 11:21:01
 * @Last Modified by: quanyj
 * @Last Modified time: 2021-10-15 11:15:26
 * 服务配置获取
 */

const CONFIG = {
  API_SERVER: import.meta.env.API_SERVER,
};

export default function getConfig() {
  return CONFIG;
}
