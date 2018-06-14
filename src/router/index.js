import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/Home.vue'], resolve)
      // children: [
      //   {
      //     path: '/test',
      //     component: resolve => require(['@/pages/Test.vue'], resolve)
      //   }
      // ]
    },
    {
      path: '/test',
      name: 'Test',
      component: resolve => require(['@/pages/Test.vue'], resolve)
    }
  ]
})
