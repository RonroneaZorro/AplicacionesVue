import { createRouter, createWebHistory } from 'vue-router'
import { auth } from "@/firebase";
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Pokedex from '@/views/Pokedex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        { path: '/', redirect: '/login', },
        { path: '/login', name: 'Login', component: Login, },
        { path: '/home', name: 'Home', component: Home, meta: { requiresAuth: true } },
        { path: '/pokedex', name: 'Pokedex', component: Pokedex, meta: { requiresAuth: true } },
        { path: '/:pathMatch(.*)*', redirect: '/login' }
  ]
})

router.beforeEach(async (to, from, next) => {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      
      if (to.meta.requiresAuth && !user) {
        next('/login');
      } else {
        next();
      }
      
      resolve();
        });
      });
    });

export default router
