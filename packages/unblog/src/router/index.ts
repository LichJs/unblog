import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/about'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
