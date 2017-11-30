import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/Home.vue'], resolve),
      redirect: '/menu',
      children:[{
      	path:'menu',
      	component:resolve=>require(['@/components/Menu.vue'],resolve)
      },{
      	path:"group",
      	component:resolve=>require(['@/components/Group.vue'],resolve)
      },{
      	path:"shopcat",
      	component:resolve=>require(['@/components/ShopCat.vue'],resolve)
      },{
      	path:"order",
      	component:resolve=>require(['@/components/Order.vue'],resolve)
      }]
    }
  ]
})
