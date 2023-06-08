import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import AboutUs from '../views/AboutUs.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component:Team
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component:AboutUs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router