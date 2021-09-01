import Vue from 'vue'
import VueRouter from 'vue-router'
import mytasks from '../views/mytasks.vue'
import inprogress from '../views/inprogress.vue'
import completed from '../views/completed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/mytasks'
  },
  {
    path: '/mytasks',
    name: 'mytasks',
    component: mytasks
  },
  {
    path: '/inprogress',
    name: 'inprogress',
    component: inprogress
  },
  {
    path: '/completed',
    name: 'completed',
    component: completed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
