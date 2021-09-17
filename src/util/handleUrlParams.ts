/**
 * 获取 URL 参数
 * @param name
 */
export function getUrlParam(name: string) {
  // 构造一个含有目标参数的正则表达式对象
  const reg = new RegExp(`(^|&)${name.toLowerCase()}=([^&]*)(&|$)`);
  // 匹配目标参数
  const r = window.location.search.substr(1).toLowerCase().match(reg);
  if (r != null) {
    //返回参数值
    return unescape(r[2]);
  }
  return null;
}
/**
 * url添加参数
 * @param {string} url - 需要添加参数的url
 * @param {object} params - 添加的参数，参数是'key:value'形式
 * @param {boolean} [encode=false] - 返回的url是否需要编码
 * @returns {string}
 */
export function addParams({
  url = '',
  params = {},
  encode = false,
}: {
  url?: string;
  params: object;
  encode?: boolean;
}) {
  if (!Object.keys(params).length) {
    return url;
  }
  const curUrl = decodeURIComponent(url);
  const [hostStr, searchStr] = curUrl.split('?');
  let newParams = params;
  if (curUrl.includes('?')) {
    const oldParams = {};
    searchStr.split('&').forEach(val => {
      const newVal = val.split('=');
      oldParams[newVal[0]] = newVal[1];
    });
    // 合并、去重参数
    newParams = { ...oldParams, ...params };
  }
  let [paramsStr, i] = ['', 1];
  for (const [key, val] of Object.entries(newParams)) {
    paramsStr += i > 1 ? `&${key}=${val}` : `${key}=${val}`;
    i++;
  }
  const baseUrl = `${hostStr}?${paramsStr}`;
  return encode ? encodeURIComponent(baseUrl) : baseUrl;
}
