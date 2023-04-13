import { createRouter, createWebHistory } from 'vue-router'
import AddDriver from '../components/AddDriver.vue'
import MainList from '../views/MainListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: MainList
    },
    {
      path: '/add',
      name: "add",
      component: AddDriver
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
