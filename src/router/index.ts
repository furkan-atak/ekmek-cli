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
    path: '/categories',
    name: 'navProgTech',
    component: () => import('../components/NavCategories.vue')
  },
  {
    path: '/prog-tech/datascience',
    name: 'datascience',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/data-science/index.vue')
  },
  {
    path: '/prog-tech/database',
    name: 'database',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/database/index.vue')
  },
  {
    path: '/prog-tech/desktop',
    name: 'desktop',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/desktop/index.vue')
  },
  {
    path: '/prog-tech/devops',
    name: 'devops',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/devops/index.vue')
  },
  {
    path: '/prog-tech/game',
    name: 'game',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/game/index.vue')
  },
  {
    path: '/prog-tech/hardware',
    name: 'hardware',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/hardware/index.vue')
  },
  {
    path: '/prog-tech/mobile',
    name: 'mobile',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/mobile/index.vue')
  },
  {
    path: '/prog-tech/other-progtech',
    name: 'progtech',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/other-progtech/index.vue')
  },
  {
    path: '/prog-tech/web',
    name: 'web',
    component: () => import(/* webpackChunkName: "about" */ '../views/prog-tech/web/index.vue')
  },
  {
    path: '/translate-writing/copywriting',
    name: 'copywriting',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/copywriting/index.vue')
  },
  {
    path: '/translate-writing/cv',
    name: 'cv',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/cv/index.vue')
  },
  {
    path: '/translate-writing/other-translatewriting',
    name: 'translatewriting',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/other-translatewriting/index.vue')
  },
  {
    path: '/translate-writing/scenario',
    name: 'scenario',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/scenario/index.vue')
  },
  {
    path: '/translate-writing/text-editing',
    name: 'editing',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/text-editing/index.vue')
  },
  {
    path: '/translate-writing/translate',
    name: 'translate',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/translate/index.vue')
  },
  {
    path: '/translate-writing/website-content',
    name: 'content',
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-writing/website-content/index.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
