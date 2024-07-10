import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('../views/MessageView.vue'),
      children: [
        {
          path: '/message/:id',
          name: 'MessageDetail',
          component: () => import('../components/message/MessageDetail.vue')
        }
      ]
    },

    {
      path: '/profile/:id',
      name: 'ProfileId',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/notification',
      name: 'Notification',
      component: () => import('../views/NotificationView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../components/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)

  const isAuth = localStorage.getItem('isAuth') === 'true'

  if (isAuth && publicPages.includes(to.path)) {
    return next({ name: 'Home' })
  }

  if (authRequired && !isAuth) {
    return next({ name: 'Login' })
  }

  next()
})

export default router
