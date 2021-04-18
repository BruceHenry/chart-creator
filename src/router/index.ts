import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import MainPanel from '../components/MainPanel.vue'

import BarMenuPanel from '../components/bar/BarMenuPanel.vue'
import LineMenuPanel from '../components/line/LineMenuPanel.vue'
import PieMenuPanel from '../components/pie/PieMenuPanel.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chart',
    name: 'Chart',
    component: MainPanel,
    children: [
      {
        path: 'bar',
        component: BarMenuPanel
      },
      {
        path: 'line',
        component: LineMenuPanel
      },
      {
        path: 'pie',
        component: PieMenuPanel
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
