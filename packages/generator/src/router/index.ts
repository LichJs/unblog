import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home'),
  },

  {
    path: '/labels',
    name: 'Labels',
    component: () => import(/* webpackChunkName: "Labels" */ '@/views/labels'),
  },

  {
    path: '/settings',
    name: 'Settings',
    component: () =>
      import(/* webpackChunkName: "Settings" */ '@/views/settings'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// can set some router hooks here
export function useRouter(app: App<Element>) {
  app.use(router);
}

export default router;
