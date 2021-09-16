export interface IAppContext {
  /**
   * 用户ID
   */
  uid?: number;

  /**
   * token
   */
  token?: string;

  test: () => void;
}
