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
        name: 'InvestmentHome',
        component: () =>
          import(/* webpackChunkName: "Layout" */ '@/views/main/index.vue'),
      },
      {
        path: '/invst-list',
        name: 'InvestmenList',
        component: () =>
          import(
            /* webpackChunkName: "Layout" */ '@/views/invst-list/index.vue'
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
