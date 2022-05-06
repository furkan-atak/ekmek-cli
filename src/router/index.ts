import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
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
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/sign-up/index.vue')
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import(/* webpackChunkName: "about" */ '../views/intro/index.vue')
  },
  {
    path: '/post',
    name: 'post',
    component: () => import(/* webpackChunkName: "about" */ '../views/post-project/index.vue')
  },
  {
    path: '/prog-tech/datascience',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/data-science/index.vue')
  },
  {
    path: '/prog-tech/database',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/database/index.vue')
  },
  {
    path: '/prog-tech/desktop',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/desktop/index.vue')
  },
  {
    path: '/prog-tech/devops',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/devops/index.vue')
  },
  {
    path: '/prog-tech/game',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/game/index.vue')
  },
  {
    path: '/prog-tech/hardware',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/hardware/index.vue')
  },
  {
    path: '/prog-tech/mobile',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/mobile/index.vue')
  },
  {
    path: '/prog-tech/other-progtech',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/other-progtech/index.vue')
  },
  {
    path: '/prog-tech/web',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/web/index.vue')
  },
  {
    path: '/translate-writing/copywriting',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/copywriting/index.vue')
  },
  {
    path: '/translate-writing/cv',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/cv/index.vue')
  },
  {
    path: '/translate-writing/other-translatewriting',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/other-translatewriting/index.vue')
  },
  {
    path: '/translate-writing/scenario',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/scenario/index.vue')
  },
  {
    path: '/translate-writing/text-editing',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/text-editing/index.vue')
  },
  {
    path: '/translate-writing/translate',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/translate/index.vue')
  },
  {
    path: '/translate-writing/website-content',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/website-content/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
