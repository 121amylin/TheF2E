import Vue from 'vue'
import VueRouter from 'vue-router'
import todolist from '../views/todolist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/todolist'
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: todolist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
