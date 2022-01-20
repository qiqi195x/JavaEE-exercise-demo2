// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/Administrator/Documents/JavaEE-exercise-demo2/itcast-reactjs/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/HelloWorld",
    "exact": true,
    "component": require('@/pages/HelloWorld.js').default
  },
  {
    "path": "/List",
    "exact": true,
    "component": require('@/pages/List.js').default
  },
  {
    "path": "/show",
    "exact": true,
    "component": require('@/pages/show.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
