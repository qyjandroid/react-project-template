export interface IRouterPage {
    /**
     * 页面组件
     *
     * @type {any}
     * @memberof IRouterPage
     */
    component?: any;

    props?: { [key: string]: any };

    /**
     * 当前路由路径
     */
    path: string;
    /**
     * 当前路由名称
     */
    name?: string;
    /**
     * 是否严格匹配路由
     */
    exact?: boolean;
    /**
     * 是否需要动态加载路由
     */
    isDynamic?: boolean;
    /**
     * 动态加载路由时的提示文案
     */
    loadingFallback?: string;

}