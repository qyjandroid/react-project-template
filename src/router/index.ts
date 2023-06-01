import React from 'react';

// named imports for React.lazy: https://github.com/facebook/react/issues/14603#issuecomment-726551598
export function lazyImport(name) {
  return React.lazy(
    () => import(/* webpackChunkName: "[request]",webpackPrefetch: true */ `@/pages/${name}`),
  );
}

// 使用[request] 支持实际解析的文件名
// React.lazy(
//   () => import(/* webpackChunkName: "page1",webpackPrefetch: true */ '@/pages/Page1'),
// )

export default {
  routes: [
    {
      exact: true,
      path: '/',
      isDynamic: true,
      component: lazyImport('Home'),
    },
    {
      exact: true,
      path: '/page1',
      isDynamic: true,
      component: lazyImport('Page1'),
    },
  ],
};
