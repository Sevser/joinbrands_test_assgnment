import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import userManager from '@/utills/UserManager';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      private: false,
    },
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('@/views/SignUp.vue'),
    meta: {
      private: false,
    },
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('@/views/SignIn.vue'),
    meta: {
      private: false,
    },
  },
  {
    path: '/lost-password',
    name: 'LostPassword',
    props: (route) => ({ email: route.query.email, code: route.query.code }),
    component: () => import('@/views/LostPassword.vue'),
    meta: {
      private: false,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue'),
    meta: {
      private: true,
    },
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import('@/views/About.vue'),
    meta: {
      private: false,
    },
  },
  {
    path: '/sign-out',
    name: 'SignOut',
    redirect: () => {
      userManager.logoff();
      return { name: 'Home' };
    },
  },
  {
    path: '/(.*)',
    name: '404',
    redirect: () => ({ name: 'Home' }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next({ name: 'Home' });
    return;
  }
  console.log(userManager.user, userManager.user);
  if (to.meta.private && !userManager.user) {
    next({ name: 'SignIn' });
    return;
  }
  next();
});

export default router;
