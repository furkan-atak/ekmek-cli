import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/sign-up/index.vue')
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import(/* webpackChunkName: "intro" */ '../views/intro/index.vue')
  },
  {
    path: '/post-project',
    name: 'post',
    component: () => import(/* webpackChunkName: "post-project" */ '../views/project/post-project/index.vue')
  },
  {
    path: '/project/detail',
    name: 'project-detail',
    component: () => import(/* webpackChunkName: "project-detail" */ '../views/project/detail/index.vue')
  },
  {
    path: '/project/list',
    name: 'project-list',
    component: () => import(/* webpackChunkName: "about" */ '../views/project/list/index.vue')
  },
  {
    path: '/offer/post-offer',
    name: 'postOffer',
    component: () => import(/* webpackChunkName: "about" */ '../views/offer/post-offer/index.vue')
  },
  {
    path: '/offer/list',
    name: 'offerList',
    component: () => import(/* webpackChunkName: "about" */ '../components/OfferGeneral.vue')
  },
  {
    path: '/offer/detail',
    name: 'offerDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/offer/detail/index.vue')
  },
  {
    path: '/freelancer/create',
    name: 'createFreelancer',
    component: () => import('../views/freelancer/create/index.vue')
  },
  {
    path: '/freelancer/list',
    name: 'freelancerList',
    component: () => import('../views/freelancer/list/index.vue')
  },
  {
    path: '/freelancer/profile',
    name: 'freelancerProfile',
    component: () => import('../views/freelancer/profile/index.vue')
  },
  {
    path: '/categories',
    name: 'navProgTech',
    component: () => import('../components/NavCategories.vue')
  },
  {
    path: '/user-profile',
    name: 'userProfile',
    component: () => import('../views/user/index.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
