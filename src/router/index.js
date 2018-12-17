import Vue from 'vue'
import Router from 'vue-router'
import category from '@/components/category.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'category',
      component: category
    }
  ]
})