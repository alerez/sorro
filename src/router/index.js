import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    // component: () => import('../views/Main.vue'),
    component: () => import('../views/MainSecond.vue')
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: () => import('../views/MainThanks.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
