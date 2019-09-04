import Vue from 'vue'
import Router from 'vue-router'
import LoGin from '../pages/login'
import ZhuCe from '../pages/zhuce'
import Index from '../pages/index'
import DianYing from '../pages/dianying'
import DianYingxq from '../pages/dianyingxiangqing'
import Book from '../pages/book'
import Guangbo from '../pages/guangbo'
import Groups from '../pages/groups'
import Routers from '../pages/routers'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'LoGin',
      component: LoGin
    },
    {
      path: '/zhuce',
      name: 'ZhuCe',
      component: ZhuCe
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/dianying',
      name: 'DianYing',
      component: DianYing
    },
    {
      path: '/dianyingxiangqing',
      name: 'DianYingxq',
      component: DianYingxq
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/guangbo',
      name: 'Guangbo',
      component: Guangbo
    },
    {
      path: '/groups',
      name: 'Groups',
      component: Groups
    },
    {
      path: '/routers',
      name: 'Routers',
      component: Routers
    },
    {
      path: '/*',
      name: 'Index',
      component: Index
    },
  ]
})
