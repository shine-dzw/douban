import Vue from 'vue'
import Router from 'vue-router'
import LoGin from '../pages/login'
import ZhuCe from '../pages/zhuce'
import Index from '../pages/index'
import DianYing from '../pages/dianying'
import DianYingxq from '../pages/dianyingxiangqing'

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
      path: '/*',
      name: 'Index',
      component: Index
    },
  ]
})
