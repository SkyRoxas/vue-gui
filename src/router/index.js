import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '@/components/page'
import layoutSidebar from '@/components/layout/sidebar'
import formEntries from '@/components/common/form-entries.vue'

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
          component: layoutSidebar
        },
        {
          path: '',
          component: formEntries
        }
      ]
    }
  ]
})
