import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterView from '../views/CharacterView.vue'
import GameView from '../views/GameView.vue'
import MapasView from '../views/MapasView.vue'
import WeaponView from '../views/WeaponView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/personajes',
      name: 'personajes',
      component: CharacterView,
    },
    {
      path: '/game',
      name: 'game',
      component: GameView,
    },
    {
      path: '/regions',
      name: 'regions',
      component: MapasView,
    },
    {
      path: '/armas',
      name: 'armas',
      component: WeaponView,
    },
  ]
})

export default router
