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
  {
    name: 'Checkbox 多选框',
    path: '/checkbox',
    component: () => import('@/pages/checkbox.vue'),
  },
  {
    name: 'Input 输入框',
    path: '/input',
    component: () => import('@/pages/input.vue'),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});

export { routes };
