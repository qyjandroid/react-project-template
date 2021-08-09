/** 获取当前开发环境 */
export function getEnv() {
    return {
        isDev: process.env.ENV === 'dev', // 本地开发环境
        isProd: process.env.ENV === 'prod', // 生产环境
        isTest: process.env.ENV === "test" //测试环境
    };
}

/**
 * url参数查询
 * @param {string} [url=location.search] - url地址
 * @param {string} [query] - 查询参数
 * @param {boolean} [decode=true] - 返回的查询值是否需要解码
 * @returns {object|string}
 */
export const getParams = ({ url = window.location.search, query, decode = true }: { url?: string; query?: string; decode?: boolean } = {}) => {
    const paramStr = url.split('?')[1];
    const paramArr = paramStr && paramStr.split('&') || [];
    const params: any = {};
    paramArr.forEach((param, i) => {
        const paramData = param.split('=');
        params[paramData[0]] = decode ? decodeURIComponent(paramData[1]) : paramData[1];
    });
    return query ? params[query] : params;
};


/**
 * url添加参数
 * @param {string} url - 需要添加参数的url
 * @param {object} params - 添加的参数，参数是'key:value'形式
 * @param {boolean} [encode=false] - 返回的url是否需要编码
 * @returns {string}
 */
export function addParams({ url = '', params = {}, encode = false }: { url?: string; params: object; encode?: boolean }) {
    if (!Object.keys(params).length) {
        return url;
    }
    url = decodeURIComponent(url);
    const [hostStr, searchStr] = url.split('?');
    if (url.includes('?')) {
        const oldParams = {};
        searchStr.split('&').forEach(val => {
            const newVal = val.split('=');
            oldParams[newVal[0]] = newVal[1];
        });
        // 合并、去重参数
        params = { ...oldParams, ...params };
    }
    let [paramsStr, i] = ['', 1];
    for (const [key, val] of Object.entries(params)) {
        paramsStr += i > 1 ? `&${key}=${val}` : `${key}=${val}`;
        i++;
    }
    const baseUrl = `${hostStr}?${paramsStr}`;
    return encode ? encodeURIComponent(baseUrl) : baseUrl;
}


export function classNames(...args: any) {
    const classes = [];
    for (let i = 0; i < args.length; i += 1) {
        const arg = args[i];
        if (arg) {
            const argType = typeof arg;

            if (argType === "string" || argType === "number") {
                classes.push((this && this[arg]) || arg);
            } else if (Array.isArray(arg)) {
                classes.push(classNames(...arg));
            } else if (argType === "object") {
                const hasOwn = {}.hasOwnProperty;
                Object.keys(arg).forEach(key => {
                    if (hasOwn.call(arg, key) && arg[key]) {
                        classes.push((this && this[key]) || key);
                    }
                });
            }
        }
    }

    return classes.join(" ");
}
