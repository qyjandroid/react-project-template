export interface IRouterPage {
  /**
   * 页面组件
   *
   * @type {any}
   * @memberof IRouterPage
   */
  component?: any;
  /**
   * 当前路由路径
   */
  path: string;
  /**
   * 是否严格匹配路由
   */
  exact?: boolean;
  /**
   * 动态加载路由时的提示文案
   */
  loadingFallback?: string;
}
