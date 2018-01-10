import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import Hello from 'components/Hello.vue'

import Login from '../components/login/login.vue'
import Dash from '../components/dash/dashboard.vue'
import Users from '../components/users/users.vue'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: Dash,
    meta: {requiresAuth: true},
    children: [
      {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: {
          labelName: 'Usuarios',
          description: 'Lista de usuarios'
        }
      },
      {
        path: '/',
        name: 'Hello',
        component: Hello
      }
    ]
  }
]

const router = new Router({routes, linkActiveClass: 'active'})

// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
  // if (to.matched.some(record => record.meta.requiresAuth) && (!router.app.$store.state.token || router.app.$store.state.token === 'null')) {
  // console.log('--->', record.meta.requiresAuth)
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isLogged && !localStorage.getItem('token')) {
    window.console.log('Not authenticated')
    next({name: 'Login'})
  } else {
    next()
  }
})

export default router
