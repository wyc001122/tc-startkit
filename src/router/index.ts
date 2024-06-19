import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'home',
  component: () => import('@/views/index.vue'),
  meta: {
    title: '首页',
  },
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
