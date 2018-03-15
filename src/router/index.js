import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '@/components/page'
import blockList from '@/components/blocks/edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'pageIndex',
      component: pageIndex,
      children: [
        {
          path: 'project/:id',
          component: blockList
        },
        {
          path: 'project/:id/edit',
          component: blockList
        }
      ]
    }
  ]
})
