import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

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
    component: () => import('../views/SignUp.vue'),
    meta: {
      private: false,
    },
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue'),
    meta: {
      private: false,
    },
  },
  {
    path: '/lost-password',
    name: 'LostPassword',
    component: () => import('../views/About.vue'),
    meta: {
      private: false,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/About.vue'),
    meta: {
      private: true,
    },
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import('../views/About.vue'),
    meta: {
      private: false,
    },
  },
  {
    path: '/sign-out',
    name: 'SignOut',
    redirect: () => {
      console.log('log off');
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { name: 'Home' };
    },
  },
  {
    path: '/(.*)',
    name: '404',
    redirect: () => {
      console.log('404');
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { name: 'Home' };
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  if (!to.matched.length) {
    next({ name: 'Home' });
  }
  if (to.meta.private) {
    next({ name: 'SignIn' });
  }
  next();
});

export default router;
