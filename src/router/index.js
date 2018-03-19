import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '@/components/page'
import Preview from '@/components/projects/preview'
import blockEdit from '@/components/blocks/edit'

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
          path: 'project/:project_id/edit',
          components: {
            content: Preview,
            sidebarSecond: blockEdit
          }
        },
        {
          name: 'block/edit',
          path: 'project/:project_id/edit/block/:block_id',
          components: {
            content: Preview,
            sidebarSecond: blockEdit
          }
        }
      ]
    }
  ]
})
