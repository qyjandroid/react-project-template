/*
 * @Author: quanyj
 * @Date: 2021-08-09 11:21:01
 * @Last Modified by: quanyj
 * @Last Modified time: 2021-09-16 16:32:13
 * 服务配置获取
 */

const CONFIG = {
  API_SERVER: process.env.C_API_SERVER,
};

export default function getConfig() {
  return CONFIG;
}
