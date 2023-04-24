import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterView from '../views/CharacterView.vue'
import GameView from '../views/GameView.vue'
import Mapas from '../views/Mapas.vue'

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
      component: Mapas,
    },
  ]
})

export default router
