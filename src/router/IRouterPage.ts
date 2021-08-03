export interface IRouterPage {
    /**
     * 页面组件
     *
     * @type {any}
     * @memberof IRouterPage
     */
    component?: any;
    /**
     * path路径
     *
     * @type {string}
     * @memberof IRouterPage
     */
    path?: string;

    exact?: boolean;

    props?: { [key: string]: any };

}