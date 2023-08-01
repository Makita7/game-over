import { createRouter, createWebHistory } from 'vue-router';
import MainFeed from '../views/MainFeed.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main feed',
      component: MainFeed
    },
    {
      path: '/my_games',
      name: 'my games',
      component: () => import('../views/MyGames.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../views/MyWishlists.vue'),
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: () => import('../views/MyPreferences.vue'),
    }
  ]
})

export default router;
