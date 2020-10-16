import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const constantRoutes = [
  {
    path: '/',
    // name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list/index.vue'),
  },
  {
    path: '/Button',
    name: 'Button',
    component: () => import('@/views/Button/index.vue'),
  },
  {
    path: '/cell',
    name: 'cell',
    component: () => import('@/views/cell/index.vue'),
  },
]

const createRouter = () => new Router({
 // mode: 'history',
  routes: constantRoutes
})
const router = createRouter()
export default router
