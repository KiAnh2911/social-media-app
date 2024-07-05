import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const isAuth = localStorage.getItem('isAuth')
console.log('isAuth', isAuth)

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
          component: () => import('../components/MessageDetail.vue')
        }
      ]
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../components/NotFound.vue')
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
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)
  console.log('authRequired', authRequired)

  if (authRequired && !isAuth) {
    return next({ name: 'Login' })
  }

  next()
})

export default router
