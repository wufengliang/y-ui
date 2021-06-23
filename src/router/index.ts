import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/button',
  },
  {
    name: 'Button 按钮',
    path: '/button',
    component: () => import('@/pages/button.vue'),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});

export { routes };
