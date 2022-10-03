export default {
  children: [
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
}
