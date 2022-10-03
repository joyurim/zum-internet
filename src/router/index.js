import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Layout" */ '../layout'),
    children: [
      {
        path: '',
        name: 'Slider',
        component: () =>
          import(
            /* webpackChunkName: "Layout" */ '@/views/authentication/Slider.vue'
          ),
      },
      {
        path: '/login',
        name: 'Login',
        component: () =>
          import(
            /* webpackChunkName: "Layout" */ '@/views/authentication/Login.vue'
          ),
      },
      {
        path: '/login-form',
        name: 'LoginForm',
        component: () =>
          import(
            /* webpackChunkName: "Layout" */ '@/views/authentication/LoginForm.vue'
          ),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
