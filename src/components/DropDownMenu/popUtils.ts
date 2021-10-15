/**
 *
 * 判断是否包含
 * @export
 * @param {(Node | null | undefined)} root
 * @param {Node} [n]
 * @returns
 */
export function isContains(root: Node | null | undefined, n?: Node) {
  if (!root) {
    return false;
  }

  return root.contains(n);
}

/**
 *
 * 添加监听
 * @export
 * @param {any} target
 * @param {any} eventType
 * @param {any} cb
 * @param {any} [option]
 * @returns
 */
export function addEventListenerWrap(target, eventType, cb, option?) {
  if (target.addEventListener) {
    target.addEventListener(eventType, cb, option);
  }
  return {
    remove: () => {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, cb);
      }
    },
  };
}
