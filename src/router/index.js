import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login.vue'
import Layout from '@/views/layout/index.vue'
import user from '@/router/modules/user.js'
import article from '@/router/modules/article.js'
import NotFound from '@/views/notfound.vue'

const publicRoutes = [
  {

    path: '/',
    name: 'Layout',
    component: Layout
  },
  user,
  article,
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
