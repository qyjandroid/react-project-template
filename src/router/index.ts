import React from 'react';

export default {
  routes: [
    {
      exact: true,
      path: '/',
      isDynamic: true,
      component: React.lazy(
        () => import(/* webpackChunkName: "home",webpackPrefetch: true */ '@/pages/Home'),
      ),
    },
    {
      exact: true,
      path: '/page1',
      isDynamic: true,
      component: React.lazy(
        () => import(/* webpackChunkName: "page1",webpackPrefetch: true */ '@/pages/Page1'),
      ),
    },
  ],
};
