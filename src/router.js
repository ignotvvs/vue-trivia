import { createRouter, createWebHistory } from 'vue-router'
import ChooseView from '@/views/ChooseView.vue'
import QuizView from '@/views/QuizView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      component: ChooseView
    },
    {
      path: '/quiz',
      component: QuizView 
    }
  ],
})